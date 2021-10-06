import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Datas from "./Datas";
import Form from "./Form";
import Navbar from "./Navbar";
function App() {
  return (
    
    <BrowserRouter>
     <Navbar/>
     <Route exact path = "/" > 
     <Form/>
     </Route>
     <Route path = "/allData" > 
     <Datas/>
     </Route>
     </BrowserRouter>
  );
}

export default App;
