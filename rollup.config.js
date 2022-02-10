import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.umd.js',
      name: 'Dockers',
      format: 'umd', // umd 兼容形式的包， 可以直接应用于网页 script
      sourcemap: true,
      globals: {
        react: "React",
      },
    }
  ],
  external: [
    'react',
  ],
  plugins: [
    external(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    postcss(),
    terser()
  ]
}