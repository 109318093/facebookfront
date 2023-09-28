import React from "react";
import "./LoginPage.css"
import { Link } from 'react-router-dom'
function LoginPage() {
    return(
        <div className="Login">
            <div className="facebook">
                <div className="facebooktext md:text-left sm:text-center ">
                    facebook
                </div>
                <div className="title md:text-left sm:text-center">
                Connect with friends and the world <br></br> around you on Facebook.
                </div>
            </div>
            <div className="logincontainer">
                <div className="logindetail">
                    <input type="email" placeholder="Email address or phone number"></input>
                    <br></br>
                    <input type="Password" placeholder="Password"></input>
                    <br></br>
                    <button className="btn btn btn-primary">
                        {/* Link需要安裝react-router-dom 後面to就是他導向的地方不需要給他相對路徑直接給/即可*/}
                        <Link to="/HeaderArea">Log in</Link>
                    </button>
                </div>
                <div className="forget">
                    <a href="forget">Forgot password?</a>
                </div>
                <div className="underline"></div>
                <div className="create">
                    <button className="btns">
                        Create New Account
                    </button>
                </div>
                <br></br>
                <div className="page">
                    <a href="createpage">Create a page</a>  for a celebrity, brand or business.
                </div>
            </div>
        </div>
    )
}

export default LoginPage