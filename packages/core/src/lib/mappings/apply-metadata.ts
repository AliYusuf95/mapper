import {
    getMetadataMap,
    getRecursiveCount,
    getRecursiveDepth,
} from '../symbols';
import type {
    ApplyMetadataFn,
    MappingStrategy,
    MetadataIdentifier,
} from '../types';
import { MetadataClassId } from '../types';
import { isDateConstructor } from '../utils/is-date-constructor';
import { isEmpty } from '../utils/is-empty';
import { isPrimitiveConstructor } from '../utils/is-primitive-constructor';
import { getRecursiveValue, setRecursiveValue } from '../utils/recursion';
import { setMutate } from '../utils/set';

export function defaultApplyMetadata(
    strategy: MappingStrategy<MetadataIdentifier>
): ApplyMetadataFn {
    const mapper = strategy.mapper;
    const metadataMap = getMetadataMap(mapper);
    const recursiveCountMap = getRecursiveCount(mapper);
    const recursiveDepthMap = getRecursiveDepth(mapper);

    function applyMetadata(model: MetadataIdentifier) {
        // get the metadata of the model
        const metadata = metadataMap.get(model);

        // instantiate a model
        const instance = {};

        // if metadata is empty, return the instance early
        if (isEmpty(metadata) || !metadata) {
            return instance;
        }

        // walking the metadata
        for (let i = 0, length = metadata.length; i < length; i++) {
            // destructure the metadata
            const key = metadata[i][MetadataClassId.propertyKeys];
            const metaFn = metadata[i][MetadataClassId.metaFn];
            const isArray = metadata[i][MetadataClassId.isArray];

            /**
             * in V8, AutoMapper does not instantiate a new model on applying metadata anymore.
             * Hence, isGetterOnly seems to be obsolete.
             */
            // const isGetterOnly = metadata[i][MetadataClassId.isGetterOnly];
            // skip getter only completely
            // if (isGetterOnly) {
            //     continue;
            // }

            // call the meta fn to get the metaResult of the current key
            const metaResult = metaFn();

            // if the metadata is an Array, then assign an empty array
            if (isArray) {
                setMutate(instance as Record<string, unknown>, key, []);
                continue;
            }

            // if is String, Number, Boolean
            // null meta means this has any type or an arbitrary object, treat as primitives
            if (isPrimitiveConstructor(metaResult) || metaResult === null) {
                setMutate(instance as Record<string, unknown>, key, undefined);
                continue;
            }

            // if is Date, assign a new Date value if valueAtKey is defined, otherwise, undefined
            if (isDateConstructor(metaResult)) {
                setMutate(instance as Record<string, unknown>, key, new Date());
                continue;
            }

            // get depth and count of the current key on the current model
            // Eg: Foo {bar: Bar}, model here is Foo and key is bar
            const depth = getRecursiveValue(recursiveDepthMap, model, key);
            const count = getRecursiveValue(recursiveCountMap, model, key) || 0;

            // if no depth, just instantiate with new keyword without recursive
            if (depth === 0) {
                setMutate(instance as Record<string, unknown>, key, {});
                continue;
            }

            // if depth equals count, meaning instantiate has run enough loop.
            // reset the count then assign with new keyword
            if (depth === count) {
                setRecursiveValue(recursiveCountMap, model, key, 0);
                setMutate(instance as Record<string, unknown>, key, {});
                continue;
            }

            // increment the count and recursively call instantiate
            setRecursiveValue(recursiveCountMap, model, key, count + 1);
            setMutate(
                instance as Record<string, unknown>,
                key,
                applyMetadata(metaResult as MetadataIdentifier)
            );
        }

        // after all, resetAllCount on the current model
        recursiveCountMap.get(model)?.clear();
        return instance;
    }

    return applyMetadata as ApplyMetadataFn;
}
