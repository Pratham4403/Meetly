import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import httpStatus from "http-status";


export const AuthContext = createContext({});

const client = axios.create({
    baseURL : "http://localhost:1856/api/v1/users"
});

export const AuthProvider = ({children})=>{
    const authContext = useContext(AuthContext);
    const [userData, setUserData] = useState(authContext);

    const handleRegister = async(name,username,password)=>{
        try{
            let request = await client.post("/register",{
                name : name,
                username : username,
                password : password
            });

            if(request.status === httpStatus.CREATED){
                return request.data.message;
            }
        }
        catch(err){
            throw(err);
        }
    }

    const handleLogin = async (username, password, setMessage) => {
        try {
            let request = await client.post("/login", {
                username: username,
                password: password
            });
    
            if (request.status === httpStatus.OK) {
                localStorage.setItem("token", request.data.token);
                setMessage("Login Successful!"); // Show message
    
                // // Redirect after 3 seconds
                // setTimeout(() => {
                //     router("/");
                // }, 1000);
    
                return "Login Successful!"; // Return message for UI
            }
        } catch (err) {
            throw err;
        }
    };
    
    const getHistoryOfUser = async()=>{
        try{
            let request = await client.get("/get_all_activity",{
                params : {
                    token : localStorage.getItem("token")
                }
            });
            return request.data;
        }
        catch(e){
            throw e;
        }
    }

    const addToUserHistory = async (meetingcode)=>{
        try{
            let request = await client.post("/add_to_activity",{
                token: localStorage.getItem("token"),
                meeting_code : meetingcode
            });
            return request;
        }
        catch(e){
            throw e;
        }
    }

    const router = useNavigate();

    const data = {
        userData,setUserData,getHistoryOfUser,addToUserHistory,handleRegister,handleLogin
    }
    
    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}