import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LogedProvider } from "./context/Loged.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <LogedProvider>
    <App/>
    </LogedProvider>
  </>
)
