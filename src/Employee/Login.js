import React from "react";
import Employee from "./Employee";
import { useRef,useState } from "react";
import "./Login.css";
import EmployeeData from "../data/Post.json";
import userEvent from "@testing-library/user-event";

function Login() {
    const userId = useRef();
    const userPassword = useRef();
    const [verified, setVerified] = useState(false);

  function verifiedUsers(){
    var bool = false;
    EmployeeData.map((Emp) => {
       if(Emp.email === userId.current.value){
        if(Emp.password=== userPassword.current.value){
                bool = true;
            } 
       }
     setVerified(bool)   
     if(!bool){
         alert("Wrong Id");
     }
    })
  }    
  return (
      <>
    {!verified ? 
    <div className="main">
      <div className="container">
        <input
          className="input_box_1"
          type="text"
          ref={userId}
          placeholder="Enter your email"
        ></input>
        <br></br>
        <input
          className="input_box_2"
          type="text"
          ref={userPassword}
          placeholder="Enter your password"
        ></input>
        <br></br>
        <button className="button_1" onClick={verifiedUsers}>Login</button>
        <br></br>
        <button className="button_2">Reset</button>
        <br></br>
      </div>
    </div>
    : <div><Employee /></div>}
    </>
  );
}

export default Login;
