module.exports = {
  '*': 'prettier -uw --cache',
  '*.{ts,tsx}': ['eslint --cache --fix .', () => 'tsc --noEmit --pretty'],
};
