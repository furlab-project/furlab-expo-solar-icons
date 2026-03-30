import { defineConfig, globalIgnores } from 'eslint/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores(['**/.idea/', '**/build/', '**/node_modules/', 'src/vendor/']),
  {
    extends: compat.extends('universe/node', 'universe/web'),

    settings: {
      react: {
        version: '18',
      },
    },

    // eslint-plugin-node's no-path-concat rule uses removed ESLint APIs in v10.
    rules: {
      'node/no-path-concat': 'off',
    },
  },
]);
