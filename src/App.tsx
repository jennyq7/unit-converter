import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>  
      
      </BrowserRouter>      
    </div>
  );
}

export default App;
