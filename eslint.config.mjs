import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// const eslintConfig = [...compat.extends("next/core-web-vitals", "prettier")];
const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'prettier'],
    rules: {
      semi: ['error', 'always'],
      'no-unused-vars': 'warn',
      'import/no-unresolved': 'error', // Ensure imports are resolved correctly
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
    },
  }),
];

export default eslintConfig;
