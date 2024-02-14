import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Main CSS
import './App.css';

// Pages
import Calculator from './Pages/calculator'

// Functions
function calculator() {
  return <Calculator />;
}


// Main Function
function App() {
  return (
    <div className="outer-wrapper">
      <div className='wrapper'>
        <Router>
          <Routes>
            <Route path='/' element={ calculator() } />
            <Route path='/*' element={ 'Not Found! 404' } />
          </Routes>
        </Router>
      </div>

    </div>
  );
}

export default App;
