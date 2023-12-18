import { Routes, Route } from "react-router-dom"

import { Home } from "./Page/Home";
import { Navb } from "./Component/Navb.jsx";
import Detail from "./Page/Detail";
import { AllPage } from "./Page/AllPage";
import { GenrePage } from "./Page/GenrePage";
import Read from "./Page/Read";
import Genre from "./Page/Genre";

import { Abus } from "./Page/Abus";
import { Foot } from "./Component/Foot.jsx";






function App(){
  return ( <div>
    <Navb/>
 
    
    <Routes>
      <Route path="/" Component={AllPage}/>
      <Route path="/detail/:endpoint" Component={Detail}/>
      <Route path="/popular" Component={Home}   />
      <Route path="/genre" Component={GenrePage} />
      <Route path="/read/:endpoint" Component={Read} />
      <Route path="/genre/:endpoint" Component={Genre} />

      <Route  path="/us" Component={Abus} />     
 

 
    </Routes>
<Foot/>
  </div>
);
}

export default App
