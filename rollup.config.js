import babel from 'rollup-plugin-babel'

export default {
  input: 'src/main.js',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ],
  output: {
    file: 'lib/jarg.js',
    format: 'cjs'
  }
}
