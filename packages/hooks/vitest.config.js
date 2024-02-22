import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@/*': './src/*'
    }
  },
  test: {
    files: ['src/**/__test__/*.test.ts'],
    environment: 'jsdom',
    globals: true, // 免导入常用的测试函数
    coverage: {
      enabled: true,
      include: ['src/**/*.ts'],
      exclude: ['src/*.ts']
    },
    clearMocks: true,
    onConsoleLog(log, type) {
      // if (log === 'message from third party library' && type === 'stdout') return false
      return true
    }
  }
})
