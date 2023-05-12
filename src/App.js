import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import About from './Components/About';
import TextForm from './Components/TextForm';
import React, {useState} from 'react';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
// video 12 to

function App() { //video 12
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background="grey"
      showAlert("Dark mode has been enabled","success");
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amozing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils is Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.background="white"
      showAlert("light mode has been enabled","success");
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
<>
{/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
{/* <Navbar/> */}
<BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route  path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route  path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>}>
          </Route>
    </Routes>
    </div>
    </BrowserRouter>
</>
  );
}

export default App;
