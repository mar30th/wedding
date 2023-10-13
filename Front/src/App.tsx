import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Rounter from "./router";


function App() {
  console.log(process.env.PUBLIC_URL);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Rounter></Rounter>
      </BrowserRouter>
    </div>
  );
}

export default App;
