import React from 'react'
import { NavLink } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from "./images/telstra_1.png"
import "./Navbarstyles.css"
const Navbar = () => {
    return (
        
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="#">
               <img id = "navImg" src ={logo} style={{width:"10",height:"10"}} alt="logo"></img>
             
           </NavLink>  
             
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto">

    <li className="nav-item active">
      <NavLink  className="nav-link" to="/">Home <span className="sr-only">(current)</span> </NavLink>
      </li>
      <li className="nav-item">
      <NavLink  className="nav-link" to="/allData">AllData </NavLink>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
        
    )
}

export default Navbar
