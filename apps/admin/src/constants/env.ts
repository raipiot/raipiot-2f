/**
 * 全局环境变量配置
 * @description NOTE: 只能在此文件中定义全局环境变量并引用，其他地方不允许定义全局环境变量
 */
export const GlobalEnvConfig = Object.freeze({
  PORT: import.meta.env.VITE_PORT ?? '',
  BASE_API_PREFIX: import.meta.env.VITE_BASE_API_PREFIX ?? '',
  BASE_API_URL: import.meta.env.VITE_BASE_API_URL ?? '',
  MOCK_API_PREFIX: import.meta.env.VITE_MOCK_API_PREFIX ?? '',
  MOCK_API_URL: import.meta.env.VITE_MOCK_API_URL ?? '',
  MODE: import.meta.env.MODE,
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD
})
