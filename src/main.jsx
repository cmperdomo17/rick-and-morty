import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Characters from './api/Characters.jsx'
import './index.css'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </Router>
  </>,
)
