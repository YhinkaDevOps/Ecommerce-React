import React from 'react'
import Header from './components/Header'
import './App.css';
import {BrowserRouter as Router,Routes} from "react-router-dom";


const App = () => {
  return (
    <div>
      <Router>
        <Header/>

        <Routes>
          {/* <Route path="/" exact>
            <About />
          </Route> */}
        </Routes>

      </Router>
      
    </div>
  )
}

export default App