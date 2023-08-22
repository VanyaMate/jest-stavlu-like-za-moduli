import type { Options } from '@wdio/types';


export const config: Options.Testrunner = {
    runner         : [ 'browser', {
        preset  : 'react',
        headless: !Boolean(process.env.DEBUG),
    } ],
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts : {
            project      : './tsconfig.json',
            transpileOnly: true,
        },
    },
    specs          : [
        './src/**/*.e2e.tsx',
    ],
    exclude        : [],
    maxInstances   : 10,
    capabilities   : [ {
        browserName: 'chrome',
    } ],

    logLevel              : 'info',
    bail                  : 0,
    baseUrl               : 'http://localhost',
    port                  : 5173,
    waitforTimeout        : 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount  : 3,
    framework             : 'mocha',
    reporters             : [ 'spec' ],
    mochaOpts             : {
        ui     : 'bdd',
        timeout: 60000,
    },
};
