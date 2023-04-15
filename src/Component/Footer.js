import React from "react"
import instalogo from "./Images/insta-logo.png"
import twetterlogo from "./Images/twitter-logo.jpg"
export default function Footer(){
    
    return(
        <div className="footer-div">
            <img src={instalogo} alt="" className="footer-image"/>
            <img src={twetterlogo}alt="" className="footer-image"/>


            
        </div>
    )
}