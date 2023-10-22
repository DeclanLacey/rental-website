import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './componenets/App.tsx'
import { BrowserRouter as Router} from 'react-router-dom'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Router>
)
