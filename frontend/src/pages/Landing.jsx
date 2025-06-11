import React from "react";
import "../App.css";
import LoginButton from "../buttons/Loginbutton";
import RegisterButton from "../buttons/RegisterButton";
import JAGButton from "../buttons/JAGButton";
import GetStartedButton from "../buttons/GetStartedButton";
import {Link, useNavigate} from 'react-router-dom';

export default function LandingPage(){

    const router = useNavigate();

    return(
        <div className="landingPageContainer">
            <nav>
                <div className="navHeader">
                    <img src="/bgRemovedLogo.png" alt="Meetly Logo" />
                    <h1>Meetly</h1>
                </div>
                
                <div className="navlist">
                    <JAGButton tag={"Join as Guest"}></JAGButton>
                    <RegisterButton tag={"Register"}></RegisterButton>
                    <LoginButton tag={"Login"}></LoginButton>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1><span style={{color:"#5978F3"}}>Connect </span>with your loved ones.</h1>
                    <p style={{marginBottom:"25px"}}>Cover a distance by Meetly!</p>
                    <Link to={"/auth"}>
                        <GetStartedButton></GetStartedButton>
                    </Link>
                </div>
                <div>
                    <img src="/mobile.png" alt="Interface"/>
                </div>
            </div>
        </div>
    )
}