
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , {useState} from "react";
import Alert from "./components/Alert";
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
}from "react-router-dom";


function App() {
  const toggleMode =()=>{
    if (mode==="dark"){
      setMode("light")
      document.body.style.backgroundColor ="white";
     document.title="TextUtils-Lightmode"
      showAlert("LightMode has been enabled","success")
    }
    else{
      setMode ("dark")
      document.body.style.backgroundColor ="black";
      document.title="TextUtils-Darkmode"
      showAlert("DarkMode has been enabled","success")
    }
  }
  const[mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
     setAlert({
      msg:message,
      type:type,
     })
     setTimeout(() => {
       setAlert(null);
     }, 1250);
  }
  return (
    <div>
      <Router>
      <Navbar title="TEXTUTILS" about="About" mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode}/>}/>
        </Routes> 
      </div>
      </Router>
      

{/* <Navbar />  */}
    </div>

   
  );
}

export default App;
