import React,{ useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <Router>
    <Sidebar open={open} setOpen={setOpen} />
    </Router>
  )
}

export default App
