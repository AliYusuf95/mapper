/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Layout from '@theme/Layout';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import versions from '../../versions.json';

function Version() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const latestVersion = versions[0];
  const pastVersions = versions.filter(
    version => version !== latestVersion && version !== 'next'
  );
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;
  return (
    <Layout
      permalink="/versions"
      description="AutoMapper Versions page listing all documented site versions"
    >
      <div className="container margin-vert--xl">
        <h1>@nartc/automapper documentation versions</h1>
        <div className="margin-bottom--lg">
          <h3 id="latest">Latest version (Stable)</h3>
          <p>Here you can find the latest documentation.</p>
          <table>
            <tbody>
              <tr>
                <th>{latestVersion}</th>
                <td>
                  <Link to={useBaseUrl('/docs/introduction/why')}>Documentation</Link>
                </td>
                <td>
                  <a href={`${repoUrl}/releases/tag/v${latestVersion}`}>
                    Release Notes
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="margin-bottom--lg">
          <h3 id="next">Next version (Unreleased)</h3>
          <p>Here you can find the documentation for unreleased version.</p>
          <table>
            <tbody>
              <tr>
                <th>next</th>
                <td>
                  <Link to={useBaseUrl('/docs/next/introduction/why')}>Documentation</Link>
                </td>
                <td>
                  <a href={repoUrl}>Source Code</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {pastVersions.length > 0 && (
          <div className="margin-bottom--lg">
            <h3 id="archive">Past Versions</h3>
            <p>
              Here you can find documentation for previous versions of
              @nartc/automapper.
            </p>
            <table>
              <tbody>
                {pastVersions.map(version => (
                  <tr key={version}>
                    <th>{version}</th>
                    <td>
                      <Link to={useBaseUrl(`/docs/${version}/introduction/why`)}>
                        Documentation
                      </Link>
                    </td>
                    <td>
                      <a href={`${repoUrl}/releases/tag`}>Release Notes</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Version;
