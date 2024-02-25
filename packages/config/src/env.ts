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
  BASIC_AUTH_CODE: import.meta.env.VITE_BASIC_AUTH_CODE ?? '',
  MODE: import.meta.env.MODE,
  IS_DEV: import.meta.env.MODE === 'development',
  IS_STAGING: import.meta.env.MODE === 'staging',
  IS_PROD: import.meta.env.MODE === 'production',
  DEV_ONLY: import.meta.env.DEV,
  PROD_ONLY: import.meta.env.PROD
})
