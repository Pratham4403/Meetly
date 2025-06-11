import React,{useContext,useEffect,useState} from "react";
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import RestoreIcon from '@mui/icons-material/Restore';
import "../App.css";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { IconButton } from '@mui/material';

export default function HistoryPage(){
    const {getHistoryOfUser} = useContext(AuthContext);
    const [meetings,setMeetings] = useState([]);
    const routeTo = useNavigate();
    useEffect(()=>{
        const fetchHistory = async()=>{
            try{
                const history = await getHistoryOfUser();
                setMeetings(history);
            }
            catch(e){
                throw e;
            }
        }
        fetchHistory();
    },[]);

    let formatDate = (dateString)=>{
        const date = new Date(dateString);
        const Day = date.getDate().toString().padStart(2,"0");
        const Month = (date.getMonth()+1).toString().padStart(2,"0");
        const Year = date.getFullYear();
        return `${Day}/${Month}/${Year}`;
    }
    return(
        <>
            <div style={{backgroundColor:"#FBFBFB",height:"100vh"}}>
                <div style={{display:"flex",paddingTop:"30px",paddingLeft:"600px",paddingBottom:"30px"}}>
                    <h1 style={{marginRight:"400px"}}>Your Meeting History <RestoreIcon/></h1>
                    <IconButton onClick={() => {
                        routeTo("/home")
                    }} style={{color:"black",border:"1px solid black",borderRadius:"8px"}}>
                        <KeyboardBackspaceIcon style={{marginRight:"8px"}}/><p style={{fontSize:"16px",fontWeight:"bold"}}>Return home</p>
                    </IconButton >
                </div>
                <hr style={{opacity:"0.1",marginTop:"16px"}}/>
                <div style={{display:"flex",flexWrap:"wrap",marginLeft:"150px"}}>
            {
                (meetings.length !== 0) ? meetings.map((e, i) => {
                    return (
                        <>
                            <Card key={i} variant="outlined" style={{width:"20%",height:"20%",border:"1px solid black",textAlign:"center",margin:"25px 20px",padding:"10px 10px",backgroundColor:"#CCCCFF"}}>
                                <CardContent>
                                    <h4 style={{marginBottom:"10px"}}>Meeting Details :</h4>
                                    <hr style={{marginBottom:"10px"}}/>
                                    <Typography sx={{ fontSize: 14 }} style={{color:"black"}} gutterBottom>
                                       <b>Meeting Code :</b> {e.meetingCode}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5,fontSize:14 }} style={{color:"black"}}>
                                        <b>Date :</b> {formatDate(e.date)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </>
                    )
                }) :
                <>
                    <h1>No Meeting Found!</h1>
                </>
            }
            </div> 
        </div>
        </>
    )
}
