module.exports = {
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
    'plugin:react-hooks/recommended',
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint', 'unused-imports', 'react-hooks'],
      extends: [
        'airbnb-typescript',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
      ],
      settings: {
        react: {
          version: 'detect',
        },
      },
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        '@typescript-eslint/comma-dangle': 'off',
        'class-methods-use-this': 'off',
        'import/no-anonymous-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'internal'],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '@vitejs/*',
                group: 'external',
              },
              {
                pattern: '@testing-library/*',
                group: 'external',
              },
              {
                pattern: '@*/**',
                group: 'internal',
              },
              {
                pattern: './**',
                group: 'internal',
              },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
        'import/prefer-default-export': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'no-console': [
          'error',
          {
            allow: ['error'],
          },
        ],
        'react/destructuring-assignment': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
          },
        ],
      },
    },
    {
      files: ['vite.config.ts', 'playwright.config.ts'],
      parserOptions: {
        project: ['./tsconfig.node.json'],
      },
    },
    {
      files: './src/?(*.)+(spec|test).[jt]s?(x)',
      extends: ['plugin:testing-library/react'],
    },
    {
      files: './e2e/**/?(*.)+(spec|test).[jt]s?(x)',
      extends: ['plugin:playwright/playwright-test'],
    },
  ],
};
