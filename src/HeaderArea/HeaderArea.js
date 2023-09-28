import React from "react";
import { useState, useEffect, useRef } from 'react'
import './HeaderArea.css';
import { Link } from 'react-router-dom'
import MainArea from "../MainArea/MainArea";
// import Images from '../../../images/img.js'
// import facebook from "../images/facebook.png"
const serverUrl = process.env.PUBLIC_URL
async function getData() {
    // const res = await fetch('http://127.0.0.1:8000/api/hello-cors')
    // const res = await fetch('http://127.0.0.1:8000/signup')
    const res = await fetch('http://127.0.0.1:8000/api/email')
    // const data = await res.json()
    console.log(res)
}
function HeaderArea() {
    console.log('第一次')

    useEffect(() => {
        console.log(123)
        // getData()
    }, [])

    return(
        <div className="HomePage">
            <div className="header grid grid-cols-5 gap-2">
                <div className="first-header">
                    <div className="logo">
                        <Link to="/LoginPage"><img src={serverUrl + '/images/facebook.png'} alt="logo"></img></Link>
                    </div>
                    <div className="Search">
                        <div className="search-icon">
                            <img src={serverUrl + '/images/search.png'} alt="logo"></img>
                        </div>
                        <input placeholder="Search Facebook" type="Search"></input>
                    </div>
                    
                </div>
                <div className="middlie-header">
                    <div className="Icon">
                        <img src={serverUrl + '/images/home.png'} alt="logo"></img>
                    </div>
                    <div className="Icon">
                        <img src={serverUrl + '/images/user.png'} alt="logo"></img>
                    </div>
                    <div className="Icon">
                        <img src={serverUrl + '/images/youtube.png'} alt="logo"></img>
                    </div>
                    <div className="Icon">
                        <img src={serverUrl + '/images/shop.png'} alt="logo"></img>
                    </div>
                    <div className="Icon">
                        <img src={serverUrl + '/images/multiple-users-silhouette.png'} alt="logo"></img>
                    </div>
                </div>
                <div className="third-header">
                    <div className="Pluss">
                        <img src={serverUrl + '/images/plus.png'} alt="logo"></img>
                    </div>
                    <div className="Pluss">
                        <img src={serverUrl + '/images/chat.png'} alt="logo"></img>
                    </div>
                    <div className="Pluss">
                        <img src={serverUrl + '/images/bell-ring.png'} alt="logo"></img>
                    </div>
                    <div className="Pluss">
                        <img src={serverUrl + '/logo192.png'} alt="logo"></img>
                    </div>
                </div>
            </div>
            {/* <div id="test" contentEditable="true" role="textbox" suppressContentEditableWarning="true"  aria-multiline="true">this is a contenteditable div with role textbox and aria-multiline</div> */}
            <MainArea/>
        </div>
    );
}

export default HeaderArea

