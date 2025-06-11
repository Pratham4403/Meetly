import React, { useContext, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

export default function AuthenticationPage() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "signup"; 
  const [isLogin, setIsLogin] = useState(mode === "login");
  const [formState, setFormState] = useState(isLogin ? 0 : 1);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const { handleRegister, handleLogin } = useContext(AuthContext);

  useEffect(() => {
    setIsLogin(mode === "login");
    setFormState(mode === "login" ? 0 : 1);
  }, [mode]);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormState(isLogin ? 1 : 0);
  };

  const handleAuth = async (e) => {
    e.preventDefault(); // Prevent page reload
  
    try {
      if (formState === 0) {
        // Login
        let result = await handleLogin(username, password, setMessage);
        setMessage(result); // Display "Login Successful!"
        navigate("/home");
      } else if (formState === 1) {
        // Register
        let result = await handleRegister(name, username, password);
        setMessage(result);
        
        // Reset form fields on successful signup
        setName("");
        setUsername("");
        setPassword("");
      }
  
      // Clear success message after 5 seconds
      setTimeout(() => {
        setMessage("");
      }, 5000);
  
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
  
      // Clear input fields when an error occurs
      setName("");
      setUsername("");
      setPassword("");
  
      // Clear error message after 5 seconds
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  
  

  return (
    <div className="authMainDiv">
      <StyledWrapper>
        <div className="form-container">
          <p className="title" style={{ textAlign: "center", color: "white" }}>
            {isLogin ? "Sign in" : "Signup"}
          </p>
          <form className="form" onSubmit={handleAuth}>
            {!isLogin && (
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
            )}
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            {error && <Alert variant="outlined" severity="error" style={{ color: "white" }}>{error}</Alert>}
            {message && <Alert variant="outlined" severity="success" style={{ color: "white" }}>{message}</Alert>}
            <button className="sign" style={{ color: "white" }} type="submit">
              {isLogin ? "Sign in" : "Sign up"}
            </button>
          </form>
          <p className="toggle-text" style={{ textAlign: "center" }}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span className="toggle-link" onClick={toggleForm}>
              {isLogin ? " Sign up" : " Sign in"}
            </span>
          </p>
        </div>
      </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
  .form-container {
    width: 450px;
    padding: 2rem;
    border-radius: 0.75rem;
    background-color: rgba(17, 24, 39, 1);
    color: rgba(243, 244, 246, 1);
  }

  .title {
    font-size: 2rem;
    font-weight: 700;
  }

  .form {
    margin-top: 1.5rem;
  }

  .input-group {
    margin-bottom: 1rem;
    font-size: 0.875rem;
  }

  .input-group label {
    display: block;
    margin-bottom: 4px;
    color: rgba(156, 163, 175, 1);
  }

  .input-group input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
    border: 1px solid rgba(55, 65, 81, 1);
    background-color: rgba(17, 24, 39, 1);
    color: rgba(243, 244, 246, 1);
  }

  .sign {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
    background-color: rgba(167, 139, 250, 1);
    color: rgba(17, 24, 39, 1);
    margin-top: 25px;
    cursor: pointer;
  }

  .toggle-text {
    margin-top: 25px;
    font-size: 0.875rem;
    color: rgba(156, 163, 175, 1);
  }

  .toggle-link {
    color: rgba(243, 244, 246, 1);
    text-decoration: none;
    cursor: pointer;
  }

  .toggle-link:hover {
    text-decoration: underline rgba(167, 139, 250, 1);
  }
`;

