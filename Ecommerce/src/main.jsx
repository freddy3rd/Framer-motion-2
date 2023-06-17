import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimatePresence>
      <Router>
        <App />
      </Router>
    </AnimatePresence>
    
  </React.StrictMode>,
)
