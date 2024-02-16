import '@/assets/styles/main.scss'
import 'nprogress/nprogress.css'

import { messageConfig } from '@raipiot-infra/theme'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

BrowserUtils.loadFavicon()
BrowserUtils.disableGestureScale()

// 静态方法的全局配置
AMessage.config(messageConfig)

const rootElement = document.querySelector('#root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
