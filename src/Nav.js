import React ,{useEffect,useState}from 'react'
import logo from "./images/logo.png"
import avtar from "./images/avtar.png"
import './Nav.css'

function Nav() {
        // const [show, handleShow] = useState(false);
        // useEffect(() => {

        //     window.addEventListener("scroll",()=>{
        //         if(window.scrollY > 100){
        //             handleShow(true);
        //         }
        //         else{
        //             handleShow(false);
        //         }
        //     });
        //     return ()=>{
        //         window.removeEventListener("scroll");
        //     };
        // }, []);



  return (
    // <div className={`nav ${show && "nav_black"}`}>
    <div className='nav'>
         <img src={logo} className="logo" alt="..."/>
         <img src={avtar} className="avtar" alt="..."/>
    </div>
  )
}

export default Nav