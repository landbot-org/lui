import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';

const extensions = ['.ts', '.tsx'];

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
    resolve({
      extensions,
    }),
    typescript({
      tsconfig: 'tsconfig.build.json',
    }),
    commonjs(),
  ],
  external: [/node_modules/, 'tslib'],
};
