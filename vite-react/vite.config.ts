/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [ react(), eslint() ],
    css    : {
        modules: {
            generateScopedName: '[name]_[local]',
        },
    },
    test   : {
        globals   : true,
        setupFiles: './jest.setup.ts',
    },
});
