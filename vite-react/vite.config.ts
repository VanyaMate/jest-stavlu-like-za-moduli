/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';


export default defineConfig({
    plugins: [ react() ],
    css    : {
        modules: {
            generateScopedName: '[name]_[local]-[hash:base64:5]',
        },
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
    test   : {
        globals   : true,
        setupFiles: './jest.setup.ts',
        css       : {
            modules: {
                classNameStrategy: 'stable',
            },
        },
    },
});
