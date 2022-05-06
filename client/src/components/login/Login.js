import React, { useState } from "react";
import { Button } from "@mui/material";
import './login.css'

function Login (props) {
    return (
      <div className="login-box" id={"sBoxColor"}>
      <h2>{"Login"}</h2>
      <form>
          <div className="user-box">
          <input type="text" name="name" required=""/>
          <label>Username</label>
          </div>
          <div className="user-box">
          <input type="text" name="name" required=""/>
          <label>Password</label>
          </div>
          <Button type='submit' id='submitLogin'>{"Log In"}</Button>
          <div className='sbutton'>
          <Button id='submitSignUp'>{"Go to Sign Up"}</Button>
          </div>
      </form>
  </div>
    );
}

export default Login;