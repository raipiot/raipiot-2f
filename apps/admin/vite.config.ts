import path from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import { hooksImportMeta } from '@raipiot-2f/hooks/meta'
import { AntdResolver, RaipiotAntdResolver, reactPresets } from '@raipiot-infra/auto-import'
import { BootstrapAnimation } from '@raipiot-infra/bootstrap-animation'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import React from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Info from 'unplugin-info/vite'
import TurboConsole from 'unplugin-turbo-console/vite'
import type { ProxyOptions } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import ViteCompression from 'vite-plugin-compression'
import Inspect from 'vite-plugin-inspect'
import WebfontDownload from 'vite-plugin-webfont-dl'

export default defineConfig(({ mode }) => {
  const envPath = path.resolve(process.cwd(), '../..')
  const environment = loadEnv(mode, envPath)
  const {
    VITE_PORT,
    VITE_BASE_API_PREFIX,
    VITE_BASE_API_URL,
    VITE_MOCK_API_PREFIX,
    VITE_MOCK_API_URL
  } = environment as ImportMetaEnv

  const port = Number.parseInt(VITE_PORT, 10) || 5173
  const proxy: Record<string, string | ProxyOptions> = {
    [VITE_BASE_API_PREFIX]: {
      target: VITE_BASE_API_URL,
      changeOrigin: true,
      rewrite: (p: string) => p.replace(VITE_BASE_API_PREFIX, '')
    },
    [VITE_MOCK_API_PREFIX]: {
      target: VITE_MOCK_API_URL,
      changeOrigin: true,
      rewrite: (p: string) => p.replace(VITE_MOCK_API_PREFIX, '')
    }
  }

  return {
    base: '/',
    envDir: '../..',
    plugins: [
      React(),
      TanStackRouterVite(),
      Icons({
        autoInstall: true,
        compiler: 'jsx',
        jsx: 'react',
        iconCustomizer(_collection, _icon, props) {
          props.opacity = '0.8' // 图标添加灰度
        }
      }),
      AutoImport({
        dts: '@types/auto-imports.d.ts',
        include: [
          /\.[jt]sx?$/, // .ts, .tsx, .js, .jsx
          /\.md$/ // .md
        ],
        imports: [
          ...reactPresets,
          {
            from: '@/i18n',
            imports: [['default', 'i18n']]
          },
          {
            from: '@raipiot-2f/config',
            imports: ['GlobalEnvConfig', 'AppMetadata']
          },
          {
            from: '@raipiot-2f/hooks',
            imports: hooksImportMeta
          },
          {
            from: '@ant-design/icons',
            imports: [['default', 'AIcon']]
          }
        ],
        resolvers: [
          IconsResolver({
            prefix: false,
            extension: 'jsx',
            enabledCollections: ['line-md', 'material-symbols', 'svg-spinners']
          }),
          AntdResolver({
            prefix: 'A'
          }),
          RaipiotAntdResolver()
        ],
        dirs: ['src/api/**', 'src/components/**', 'src/hooks/**', 'src/store/**', 'src/utils/**']
      }),
      BootstrapAnimation({
        name: 'raipiot 2F Admin',
        description: 'raipiot SaaS 管理系统',
        lang: 'zh-CN'
      }),
      Inspect(),
      TurboConsole(),
      Info(),
      WebfontDownload(),
      visualizer({ open: false, gzipSize: true }),
      ViteCompression({
        verbose: true, // 是否在控制台中输出压缩结果
        disable: true,
        threshold: 10_240, // 体积过小时不压缩
        algorithm: 'gzip', // 压缩算法
        ext: '.gz',
        deleteOriginFile: true // 源文件压缩后是否删除
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('src', import.meta.url))
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : []
    },
    server: {
      host: true,
      port,
      strictPort: true,
      open: false,
      proxy
    },
    preview: {
      host: true,
      port,
      strictPort: true,
      open: false,
      proxy
    },
    build: {
      rollupOptions: {
        output: {
          // 优化 node_modules 打包
          manualChunks(id) {
            try {
              if (id.includes('node_modules')) {
                const name = id.split('node_modules/')[1].split('/')
                if (name[0] === '.pnpm') {
                  return name[1]
                }
                return name[0]
              }
              return undefined
            } catch (e) {
              process.stdout.write(e)
              return undefined
            }
          }
        }
      }
    }
  }
})
