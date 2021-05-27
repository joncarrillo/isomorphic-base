module.exports = {
  verbose: true,
  // testPathIgnorePatterns: ['<rootDir>/tests/e2e'],
  testEnvironment: 'jsdom',
  coverageDirectory: '<rootDir>/coverage',
  testURL: 'http://localhost/',
  coverageReporters: ['text', 'html', 'lcov'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/*.config.js',
    '!index.js',
    '!**/config/**',
    '!**/coverage/**',
    '!**/public/**',
  ],
};
