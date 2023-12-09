import { Routes, Route } from "react-router-dom"

import { Home } from "./Page/Home";
import { Navb } from "./Component/Navb";
import Detail from "./Page/Detail";
import { AllPage } from "./Page/AllPage";

import './App.css';
import { GenrePage } from "./Page/GenrePage";




function App(){
  return ( <div>
    <Navb/>
    
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/detail/:endpoint" Component={Detail}/>
      <Route path="/all" Component={AllPage}   />
      <Route path="/genre" Component={GenrePage} />

 
    </Routes>
  </div>
);
}

export default App
