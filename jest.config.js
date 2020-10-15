module.exports = {
  preset: 'jest-playwright-preset',
  testRunner: 'jest-circus/runner',
  testEnvironment: './config/CustomEnv.js',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  setupFilesAfterEnv: ['./config/jest.setup.js'],
  "testResultsProcessor": "jest-junit",
  "reporters": [
    "default",
    [
      "jest-junit", {
        "suiteName": "OmniChannel e2e tests",
        "outputDirectory": "./reports/",
        "outputName": "./junit2.xml",
        "usePathForSuiteName": "true",
        "includeShortConsoleOutput": "true",
      }
    ]
  ]
};