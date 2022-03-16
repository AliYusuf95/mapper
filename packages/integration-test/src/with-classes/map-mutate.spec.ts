import { classes } from '@automapper/classes';
import {
    addProfile,
    CamelCaseNamingConvention,
    createMapper,
} from '@automapper/core';
import { UserDto } from './dtos/user.dto';
import { User } from './models/user';
import { addressProfile } from './profiles/address.profile';
import { avatarProfile } from './profiles/avatar.profile';
import { bioProfile } from './profiles/bio.profile';
import { userProfile } from './profiles/user.profile';
import { getUser } from './utils/get-user';

describe('Map - Mutation', () => {
    const mapper = createMapper({
        strategyInitializer: classes(),
        namingConventions: new CamelCaseNamingConvention(),
    });

    afterEach(() => {
        mapper.dispose();
    });

    it('should mutate properly', () => {
        addProfile(mapper, addressProfile);
        addProfile(mapper, avatarProfile);
        addProfile(mapper, bioProfile);
        addProfile(mapper, userProfile);

        const user = getUser();
        const dto = new UserDto();
        mapper.mutate(user, dto, User, UserDto);
        expect(dto.first).toEqual(user.firstName);
        expect(dto.last).toEqual(user.lastName);
        expect(dto.full).toEqual(user.firstName + ' ' + user.lastName);
        expect(dto.jobTitle).toEqual(user.job.title);
        expect(dto.jobAnnualSalary).toEqual(user.job.annualSalary);
        expect(dto.logins).toEqual(user.logins);
        expect(dto.lastLogin).toEqual(user.logins[user.logins.length - 1]);
        expect(dto).toBe(dto);
    });

    it('should mutate properly with plain object', () => {
        addProfile(mapper, addressProfile);
        addProfile(mapper, avatarProfile);
        addProfile(mapper, bioProfile);
        addProfile(mapper, userProfile);

        const user = getUser();
        const dto = new UserDto();
        mapper.mutate(Object.assign({}, user), dto, User, UserDto);
        expect(dto.first).toEqual(user.firstName);
        expect(dto.last).toEqual(user.lastName);
        expect(dto.full).toEqual(user.firstName + ' ' + user.lastName);
        expect(dto.jobTitle).toEqual(user.job.title);
        expect(dto.jobAnnualSalary).toEqual(user.job.annualSalary);
        expect(dto.logins).toEqual(user.logins);
        expect(dto.lastLogin).toEqual(user.logins[user.logins.length - 1]);
        expect(dto).toBe(dto);
    });

    it('should mutate array properly', () => {
        addProfile(mapper, addressProfile);
        addProfile(mapper, avatarProfile);
        addProfile(mapper, bioProfile);
        addProfile(mapper, userProfile);

        const user = getUser();
        const dtos: UserDto[] = [];
        mapper.mutateArray([user], dtos, User, UserDto);
        dtos.forEach((dto) => {
            expect(dto.first).toEqual(user.firstName);
            expect(dto.last).toEqual(user.lastName);
            expect(dto.full).toEqual(user.firstName + ' ' + user.lastName);
            expect(dto.jobTitle).toEqual(user.job.title);
            expect(dto.jobAnnualSalary).toEqual(user.job.annualSalary);
            expect(dto.logins).toEqual(user.logins);
            expect(dto.lastLogin).toEqual(user.logins[user.logins.length - 1]);
        });
        expect(dtos).toBe(dtos);
    });
});
