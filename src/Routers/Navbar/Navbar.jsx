// import React from 'react';

import { Link } from "react-router-dom";
import logo from"../../assets/logo.jpg"
import { useContext } from "react";
import { AuthContext } from "../../Authentication/Authentication";
const Navbar = () => {

const {userId,logout}=useContext(AuthContext)
    const Navbar=<>
    
  <Link to="/login">
  <li className="text-white"><a>HOMEPAGE</a></li></Link>
  <Link to="/login">
  <li className="text-white"><a>FEATAURES 1</a></li></Link>
  <Link to="/login">
  <li className="text-white"><a>COURSES</a></li></Link>
  <Link to="/login">
  <li className="text-white"><a>TEACHERS 1</a></li></Link>
  <Link to="/registration">
  <li className="text-white"><a>REGISTRATION</a></li></Link>
  <Link to="/login">
  <li className="text-white"><a>LOGIN</a></li></Link>

      
      {/* <li><a>HOMEPAGE</a></li> */}
    </>
const handleLogout=()=>{

logout()
.then()
.catch(error=>{

  console.log(error)
})
}




    return (
       
           <div className="navbar  bg-base-100 bg-slate-400  fixed w-full top-0 z-50 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    {
        Navbar
    }
      </ul>
    </div>
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
    <img className="border w-48 h-28" src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {/* <li><a>Item 1</a></li> */}
    {
        Navbar
    }
    </ul>
  </div>
  <div className="navbar-end">
    {/* <a className="btn">Button</a> */}
    {
      userId?<Link to="/login">
<button className="btn btn-accent" onClick={handleLogout}>logout</button>

      </Link>
 :
      <Link to="/login">
      <button className="btn btn-accent">login</button>
      
      </Link>
     
    }
  </div>
</div>
        
    );
};

export default Navbar;