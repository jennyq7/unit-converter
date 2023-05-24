import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MainSection from './components/MainSection/MainSection';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>  
          <Route path="/" element={<MainSection/>}/>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
