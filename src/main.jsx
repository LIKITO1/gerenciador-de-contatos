import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from "./components/pages/Home.jsx"
import Register from "./components/pages/Register.jsx"
import List from "./components/pages/List.jsx"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
