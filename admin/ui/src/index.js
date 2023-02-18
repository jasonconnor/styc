import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { initialize } from './init'
import './index.scss'

initialize()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
      <App />
  </StrictMode>
)
