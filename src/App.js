import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Main} from './components/paginas/mainPage';
import {First} from './components/paginas/FirstScreen'

function App() {
  return (
    //<div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<First />}></Route>
          <Route path="/main" element={<Main />}></Route>
        </Routes>
      </Router>
    //</div>
  );
}

export default App;
