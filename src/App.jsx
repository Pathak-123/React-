import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home.jsx'
import Browse from './pages/browse'
import Info from './pages/info'
import Selection from './pages/MovieSelection.jsx'
import NotFound from './pages/404.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/info" element={<Info/>}/>
    <Route path="/selection" element={<Selection/>}/>
    <Route path="/browse" element={<Browse/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App
