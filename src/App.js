// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils - Dark Mode';
      setInterval(() => {
        document.title='TextUtils is Amazing Mode'; 
      }, 2000);
      setInterval(() => {
        document.title='Install TextUtils Now'; 
      }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils - Light Mode'
    }
  }
  return (
    <>
    
{/* <Navbar title="about textutiles" abouttext="About textutilisse" /> */}
<Router>
<Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container" my-3>
<Routes>
          {/* <Route path="/about">
            <About/>
          </Route> */}
          <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text Here To analyze" mode={mode} />} />
          {/* <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the Text Here To analyze" mode={mode}/>
          </Route> */
          }
</Routes>

  


</div>
</Router>

    </>
  );
}

export default App;
