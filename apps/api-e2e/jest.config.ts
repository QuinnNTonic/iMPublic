/* eslint-disable */
export default {
  preset: '../../jest.preset.js',
  globals: {},
  coverageDirectory: '../../coverage/apps/api-e2e',
  displayName: 'api-e2e',
  setupFiles: ['<rootDir>/global-mocks.ts'],
  reporters: ['default', ['jest-junit', { outputDirectory: 'reports', outputName: 'api-e2e.xml' }]],
};
