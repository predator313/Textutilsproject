/*
var arr=[1,2,"max"];
// arr=arr.filter(function(entry){
//     return entry.trim()!="";
// })
arr = arr.filter((ele)=>{
    return (ele.length>0 || !isNaN(ele));
});
console.log(arr);
*/
//the above is the tomorrow logic which will helps in making the
//logic in the function ,this helps in dealing the white space bug


import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/TextForm";

import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import Textform from './components/TextForm';
//now my task is to print multiple button or dark mode option using the switches
//this concept is very useful and just brilliant concept to deals with
//i will surely do this tomorrow to get practice on react i need to practice

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743 ";
      showAlert("Dark mode has been enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enable", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Textutils"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={ <About/>}>
            </Route>
            <Route exact path="/" element={<Textform
                showAlert={showAlert}
                heading="enter the text to analyze"
                mode={mode}
              /> }>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
