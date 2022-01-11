import esbuild from 'esbuild'
import {pnpPlugin} from '@yarnpkg/esbuild-plugin-pnp'

export const baseOptions = {
  entryPoints: ['src/index.ts'],
  plugins: [pnpPlugin()],
  tsconfig: 'tsconfig.json',
  bundle: true,
  splitting: true,
  format: "esm",
  outdir: "dist",
  platform: "node",
  target: "esnext",
  minify: false,
  external: [],
  outExtension: { '.js': '.mjs' }
}

export const productionOptions = {
  ...baseOptions,
  minify: false
}

export const watchOptions = {
  ...baseOptions,
  watch: true,
  minify: false
}

const serveRequestHandler = (args) => console.log({args})

export const serveOptions = {
  servedir: "dist",
  port: 8080
}

export { esbuild }

esbuild.build(productionOptions)
  .catch(()=> process.exit(1))
