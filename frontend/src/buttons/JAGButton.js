import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const JAGButton = ({tag}) => {
  const router = useNavigate();
  return (
    <StyledWrapper>
      <button onClick={()=>{
        router("/g12f6")
      }}>{tag}</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    --color: #560bad;
    font-family: inherit;
    display: inline-block;
    width: 8em;
    height: 2.6em;
    line-height: 2.5em;
    margin: 20px 5px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border: 2px solid var(--color);
    transition: color 0.5s, background-color 0.5s;
    z-index: 1;
    font-size: 17px;
    border-radius: 6px;
    font-weight: 500;
    color: #fff;
    background-color: #000; /* Initial background color set to black */
  }

  button:before {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 200px;
    border-radius: 50%;
    top: 100%;
    left: 100%;
    transition: all 0.7s;
  }

  button:hover {
    color: #fff;
  }

  button:hover:before {
    top: -30px;
    left: -30px;
  }

  button:active:before {
    background: #3a0ca3;
    transition: background 0s;
  }
`;



export default JAGButton;
