import { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Button, IconButton, TextField } from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import LogoutButton from "../buttons/LogoutButton";
import { Link } from "react-router-dom";
import {AuthContext} from '../contexts/AuthContext';

function HomeComponent(){
    let navigate = useNavigate();
    const [meetingCode,setMeetingCode]=useState("");

    const {addToUserHistory} = useContext(AuthContext);
    let handleVideoCall = async()=>{
        await addToUserHistory(meetingCode);
        navigate(`/${meetingCode}`);    
    }
    return(
        <>
            <div className="MainNavbar">
                <div className="navBar">
                    <div style={{display:"flex",alignItems:"center"}}>
                        <Link to="/home" style={{textDecoration:"none",display:"flex",marginLeft:"20px"}}>
                            <img src="/bgRemovedLogo.png" alt="Meetly Logo" style={{width:"7%"}}/>
                            <h1 style={{color:"Black",fontSize:"30px",marginLeft:"8px"}}>Meetly</h1>
                        </Link>
                    </div>
                    <div style={{display:"flex",alignItems:"center",marginRight:"20px"}}>
                        <div style={{border:"1px solid black",marginRight:"30px",borderRadius:"8px"}} className="historyDiv">
                            <IconButton onClick={()=>{navigate('/history')}} style={{background:"none"}}>
                                <RestoreIcon style={{color:"black",marginRight:"5px"}}/>
                                <h5 style={{color:"black",fontSize:"18px"}}>History</h5>
                            </IconButton>
                        </div>
                        <LogoutButton/>
                    </div>
                </div>
                <hr style={{opacity:"0.1"}}/>
            </div>
            <div className="bodyNavbar">
                <div className="meetContainer">
                    <div className="leftPanel">
                        <div>
                            <h2 style={{marginBottom:"20px"}}>Providing Quality Video Call Just Like Quality Education!</h2>
                            <div style={{display:"flex",gap:"10px"}}>
                                <TextField onChange={e=>{setMeetingCode(e.target.value)}} id="outlined-basic" label="Meeting Code" variant="outlined"/>
                                <Button onClick={handleVideoCall} variant="contained" style={{marginLeft:"10px"}}>Join</Button>
                            </div>
                        </div>
                    </div>
                    <div className="rightPanel">
                        <img src="/logo3.png"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withAuth(HomeComponent);