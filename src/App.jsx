import { Routes, Route } from "react-router-dom"

import { Home } from "./Page/Home";
import { Navb } from "./Component/Navb";
import Detail from "./Page/detail";
import { AllPage } from "./Page/AllPage";
import { GenrePage } from "./Page/GenrePage";
import Read from "./Page/Read";
import Genre from "./Page/Genre";
import { AboutUs } from "./Page/AboutUs";





function App(){
  return ( <div>
    <Navb/>
 
    
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/detail/:endpoint" Component={Detail}/>
      <Route path="/all" Component={AllPage}   />
      <Route path="/genre" Component={GenrePage} />
      <Route path="/read/:endpoint" Component={Read} />
      <Route path="/genre/:endpoint" Component={Genre} />
      <Route path="/us" Component={AboutUs} />
      
 

 
    </Routes>
  </div>
);
}

export default App
