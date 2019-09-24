/* eslint-disable prettier/prettier */

module.exports = {
  presets: [['@vue/app', {
    polyfills: [
      'es6.array.iterator',
      'es6.promise',
      'es6.string.iterator'
    ]
  }]],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
  ]
}