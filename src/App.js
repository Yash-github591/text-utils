import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  const changeMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#0d0d62';
      document.body.style.color='white';
      showAlert("Dark mode has been enabled.", "success");
      document.title='Dark';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light mode has been enabled.", "success");
      document.title='Light';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Text Utility" mode={mode} changeMode={changeMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
      {/* /users ---> component 1
      /users/home --> component 2 */}
          <Route exact path="/about"  element= {<About/>}/>
          <Route exact path="/" element={<Textform showAlert={showAlert} text="Hello, Enter your text "/>}/>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
