module.exports = {
  tabWidth: 2,
  bracketSpacing: true,
  singleQuote: true,
  jsxBracketSameLine: true,
  htmlWhitespaceSensitivity: 'ignore',
  trailingComma: 'all',
  printWidth: 100,
  semi: true,
  arrowParens: 'always',
  overrides: [
    {
      files: ['*.json'],
      options: {
        trailingComma: 'es5',
      },
    },
  ],
};
