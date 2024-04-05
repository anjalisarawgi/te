// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Forms from './components/Forms';
import About from './components/About';
import React, { useState } from 'react';
// test1 - branch1
function App() {

  // const [mode, setMode] = useState('dark');
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#1f3946"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
    }
  }

  return (
    <div className="App" >
      {/* <Navbar title="wordRephraser" elementAbout="About text utils" home={23}/> */}
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className='container my-3'>
        <Forms heading="Welcome to TextCraft!" contentBox="Enter your text below" mode={mode} />
      </div>
      {/* <div className='container'>
      <About />
    </div> */}

    </div>

  );
}


export default App;
