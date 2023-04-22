
import './App.css';

import React, {useState} from 'react'
import Navbar from './components/Navbar';
import NewsMain from './components/NewsMain';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
   Routes,
  Route,
} from "react-router-dom";


const App =()=>{
 const pageSize=10;

   const apikey = process.env.REACT_APP_NEWS_API

  // const apikey = "5e596eb4eb30430aa4cc28cc4ad3d911"

  const [progress, setProgress]=useState(0)
  const [color, setColor]=useState('blue')

  const [mode, setMode] = useState("light");
  const toggleMode = () =>{
    //  (mode === "light" ? setMode("dark"): setMode("light"))
    //  (mode === "light" ? document.body.style.backgroundColor="#002D62": document.body.style.backgroundColor="white")
    //  (mode === "light" ? showAlert("Dark mode has been enabled", "success"): showAlert("Light mode has been enabled", "success"))
  if (mode === "light"){
    setMode("dark");
    document.body.style.backgroundColor="#002D62";
    // showAlert("Dark mode has been enabled", "success");
  
  }

  else{
    setMode("light");
    document.body.style.backgroundColor="white"
    // showAlert("Light mode has been enabled", "success")
  }
  }
  // setProgress = (progress)=>{
  //   setState({progress:progress})
  // }



  // setColor = (color)=>{
  //   setState({color:color})
  // }


    return (
      <>
      
      <BrowserRouter>
     <Navbar title = 'NewsDekho' mode={mode}  toggleMode = {toggleMode} />
     <LoadingBar
        color={color} 
        height={3}
        progress={progress}
        />
         {/* onLoaderFinished={() => setProgress(0)} */}
     {/* <NewsMain setColor={setColor}  setProgress={setProgress}  pageSize={pageSize} country ="in" category ="general"/> */}
      <Routes>
 <Route  exact path="/" element={<NewsMain  mode={mode} setColor={setColor}  setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country ="in" category ="general"/>}></Route>
 <Route exact path="/business" element={<NewsMain  mode={mode} setColor={setColor}  setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country ="in" category ="business"/>}></Route>
 <Route exact path="/entertainment" element={<NewsMain  mode={mode} setColor={setColor}  setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country ="in" category ="entertainment"/>}></Route>
 <Route exact path="/health" element={<NewsMain  mode={mode} setColor={setColor}  setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country ="in" category ="health"/>}></Route>
 <Route exact path="/science" element={<NewsMain  mode={mode} setColor={setColor}  setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country ="in" category ="science"/>}></Route>
 <Route exact path="/sports" element={<NewsMain  mode={mode} setColor={setColor}  setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country ="in" category ="sports"/>}></Route>
 <Route exact path="/technology" element={<NewsMain  mode={mode} setColor={setColor}  setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country ="in" category ="technology"/>}></Route>
          
      </Routes>
      </BrowserRouter>
      </>
    )
  }



export default App;
