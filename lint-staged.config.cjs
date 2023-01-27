module.exports = {
  '*': 'prettier -uw --cache',
  '*.{ts,tsx}': [
    'eslint --cache --fix --ignore-path .gitignore --ext .ts,.tsx .',
    () => 'tsc --noEmit --pretty',
  ],
};
