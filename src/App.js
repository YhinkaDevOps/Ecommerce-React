import React from 'react'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Header from './components/Header'
import Pages from "./pages/Pages";
import './App.css';


const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Pages/>}/>
        </Routes>

      </Router>
      
    </div>
  )
}

export default App