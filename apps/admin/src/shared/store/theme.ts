import { Theme } from '@raipiot-infra/enums'
import { darkThemeConfigPresets, lightThemeConfigPresets } from '@raipiot-infra/theme'
import type { ThemeConfig } from 'antd'
import { create } from 'zustand'
import { devtools, subscribeWithSelector } from 'zustand/middleware'

interface State {
  theme: Theme
  enableHappyWorkTheme: boolean
  lightThemeConfig: ThemeConfig
  darkThemeConfig: ThemeConfig
}

interface Actions {
  /**
   * 是否为亮色主题
   */
  isLightTheme: () => boolean
  /**
   * 是否为暗色主题
   */
  isDarkTheme: () => boolean
  /**
   * 修改主题模式
   * @description
   * - 切换主题模式时，会自动添加或移除 document 上 `dark` 类名
   * - 将主题模式存储到 localStorage 中，以便下次打开页面时读取
   */
  changeTheme: (theme: Theme) => void
  /**
   * 切换主题模式
   */
  toggleTheme: () => void
  /**
   * 启用/禁用快乐工作主题
   */
  setHappyWorkTheme: (enable: boolean) => void
  /**
   * 切换快乐工作主题
   */
  toggleHappyWorkTheme: () => void
}

const initialState: State = {
  /**
   * 全局亮色主题配置项
   */
  lightThemeConfig: lightThemeConfigPresets,

  /**
   * 全局暗色主题配置项
   */
  darkThemeConfig: darkThemeConfigPresets,

  /**
   * 主题模式
   * @description
   * 可选值：`light` | `dark`
   */
  theme: ThemeUtils.getDefaultTheme(),

  /**
   * 是否开启 antd 快乐工作主题，默认开启
   */
  enableHappyWorkTheme: true
}

export const useThemeStore = create<State & Actions>()(
  subscribeWithSelector(
    devtools((set, get) => ({
      ...initialState,
      isLightTheme: () => get().theme === Theme.LIGHT,
      isDarkTheme: () => get().theme === Theme.DARK,
      changeTheme: (theme: Theme) => {
        set({ theme })
        ThemeUtils.changeTheme(theme)
      },
      toggleTheme: () => {
        set(() => ({ theme: get().isLightTheme() ? Theme.DARK : Theme.LIGHT }))
        ThemeUtils.changeTheme(get().theme)
      },
      setHappyWorkTheme: (enable: boolean) => set({ enableHappyWorkTheme: enable }),
      toggleHappyWorkTheme: () =>
        set((state) => ({ enableHappyWorkTheme: !state.enableHappyWorkTheme }))
    }))
  )
)

/**
 * 监听主题改变
 * @description
 * - 切换主题模式时，会自动添加或移除 document 上 `dark` 类名
 * - 将主题模式存储到 localStorage 中，以便下次打开页面时读取
 */
useThemeStore.subscribe(
  (state) => state.theme,
  (theme) => ThemeUtils.changeTheme(theme),
  {
    fireImmediately: true
  }
)
