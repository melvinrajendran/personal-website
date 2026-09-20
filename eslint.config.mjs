import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier/flat';

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  prettierConfig,
  {
    rules: {
      curly: 'error',
      'one-var': ['error', 'never'],
      'vars-on-top': 'error',
      'func-names': ['error', 'always'],
      camelcase: 'error',
      '@next/next/no-img-element': 'off',
    },
  },
  globalIgnores(['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts']),
]);
