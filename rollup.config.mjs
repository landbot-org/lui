import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: ['src/index.ts', 'src/Icon/icons/index.ts'],
  output: [
    {
      dir: 'dist',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  plugins: [
    peerDepsExternal(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
    nodeResolve({
      extensions: ['.ts', '.tsx'],
    }),
    typescript({
      tsconfig: 'tsconfig.build.json',
    }),
    commonjs(),
    terser(),
  ],
  external: [/node_modules/, 'tslib'],
};
