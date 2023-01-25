module.exports = {
  '*': 'prettier -uw --cache',
  '*.{ts,tsx}': ['eslint --cache --fix', 'pnpm run type-check'],
};
