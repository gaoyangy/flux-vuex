import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import path from 'path'
import replace from 'rollup-plugin-replace'

export default {
  entry: path.resolve(__dirname, './src/app.js'),
  dest: path.resolve(__dirname, './dist/app.js'),
  format: 'iife',
  moduleName: 'app',
  sourceMap: true,
  useStrict: false,
  external: [
    'vue',
    'vue-router'
  ],
  plugins: [
    vue(),
    replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
        'process.env.VUE_ENV': JSON.stringify('browser')
    }),
    babel({
      babelrc: false,
      externalHelpers: false,
      exclude: 'node_modules/**',
      'plugins': [
        ['transform-object-rest-spread', { 'useBuiltIns': true }]
      ]
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
  ]
}