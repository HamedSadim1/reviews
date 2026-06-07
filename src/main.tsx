import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ROOT_ELEMENT_ID } from './constants'

ReactDOM.createRoot(document.getElementById(ROOT_ELEMENT_ID) as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
