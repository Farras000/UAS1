import { Routes, Route } from "react-router-dom"

import { Home } from "./Page/Home";
import { Navb } from "./Component/Navb";
import Detail from "./Page/detail";
import { AllPage } from "./Page/AllPage";

import './App.css';
import GenrePage from "./Page/GenrePage";
import { Tespage } from "./Page/Tespage";

function App(){
  return ( <div>
    <Navb/>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/" Component={Tespage}/>
      <Route path="/Detail" Component={Detail}/>
      <Route path="/AllPage" Component={AllPage}/>
      <Route path="/GenrePage" Component={GenrePage}/>
 
      
    </Routes>
  </div>
);
}

export default App
