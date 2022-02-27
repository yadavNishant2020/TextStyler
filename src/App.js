import './App.css';
// import About from './Components/About';
import  {useState} from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  const [mode, setMode] = useState('light');
   const toggleMode = () =>{
    if(mode==='light'){
      setMode ('dark')
      document.body.style.backgroundColor = '#444444';
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor = 'white';
    }
  }
    const toggleModeGreen = () => {
        if (mode === "light") {
          setMode("dark");
          document.body.style.backgroundColor = "#025955";
        } else {
          setMode("light");
          document.body.style.backgroundColor = "white";
        }
      };
  const toggleModeBlue = () =>{
    if(mode==='light'){
      setMode ('dark')
      document.body.style.backgroundColor = '#0C4271';
    }
    else{
      setMode ('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar title="TextStyler" mode={mode} toggleMode={toggleMode} toggleModeBlue={toggleModeBlue} toggleModeGreen={toggleModeGreen}/>
    <div className="container my-5">
    <TextForm heading="Enter Your Text To Analyze" mode={mode} />
    {/* <About/> */}
    </div>
    
    </>
  );
}

export default App;
