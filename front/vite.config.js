import { defineConfig } from 'vite'
import { ViteEjsPlugin } from "vite-plugin-ejs";
import path from 'path'
import { globSync } from 'glob'
import autoprefixer from 'autoprefixer'

console.log('vite.config.js');

const tsArray = globSync('src/pages/**/*.ts')

const htmlArray = globSync('src/pages/**/*.html')


const createEntries = (filePathArray) => {
  const entries = {}
  filePathArray.forEach((filePath) => {
    const pathArray = filePath.split(path.sep).filter((e, i) => i > 1)
    const fileName = pathArray.map((e) => e.split('.')[0]).join('/')
    entries[fileName] = filePath
  })
  return entries
}
console.log({
  input: {
    ...createEntries(tsArray),
    ...createEntries(htmlArray)
  }
});

export default defineConfig({
  root: './src/pages',
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        ...createEntries(tsArray),
        ...createEntries(htmlArray)
      },
      output: {
        entryFileNames: 'assets/js/[name].js',
        chunkFileNames: 'assets/js/dev/[name].js',
        assetFileNames: (assetInfo) => {
          if (/\.( gif|jpeg|jpg|png|svg|webp| )$/.test(assetInfo.name)) {
            return 'assets/img/[name].[ext]';//画像アセットの出力設定
          }
          if (/\.css$/.test(assetInfo.name)) {
            return 'assets/css/[name].[ext]';
          }
          return 'assets/[name].[ext]';
        },
      }
    },
    css: {
      postcss: {
        plugins: [autoprefixer]
      }
    }
  },
  server: {
    port: 3000,
    host: true,
    strictPort: true,
    watch: {
      usePolling: true
    }
  },
  plugins: [
    ViteEjsPlugin()
  ]
})