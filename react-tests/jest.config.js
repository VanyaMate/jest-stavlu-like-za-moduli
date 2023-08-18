export default {
    testEnvironment: 'node',
    testMatch: ['<rootDir>/**/*.test.js'],
    testPathIgnorePatterns: ['/node_modules/'],
    coverageDirectory: './coverage',
    coveragePathIgnorePatterns: ['node_modules', 'src/database', 'src/test', 'src/types'],
    reporters: ['default'],
    globals: {},
    transform: {},
};