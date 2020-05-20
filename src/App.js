import React from 'react';
import Menu from './components/Menu';
import Header from './components/Header';
import About from './components/About';
import Experiences from './components/Experiences';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      <Menu></Menu>
      <Header></Header>
      <About></About>
      <Experiences></Experiences>
      </header>
    </div>
  );
}

export default App;
