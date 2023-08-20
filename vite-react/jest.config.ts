export default {
    testEnvironment   : 'jsdom',
    transform         : {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper  : {
        '\\.(gif|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
        '\\.(css|scss)$'   : 'jest-css-modules-transform',
    },
    setupFilesAfterEnv: [
        '<rootDir>/jest.setup.ts',
    ],
};