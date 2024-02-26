import '@/assets/styles/main.scss'
import 'nprogress/nprogress.css'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import App from './app'

const rootElement = document.querySelector('#root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
