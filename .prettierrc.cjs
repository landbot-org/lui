module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  endOfLine: 'lf',
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@lui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
