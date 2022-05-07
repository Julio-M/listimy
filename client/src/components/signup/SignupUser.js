import React, { useState } from "react";
import { Button } from "@mui/material";
import './signup.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";

function SignupUser (props) {
  let navigate = useNavigate();
  const [freelancer, setFreelancer] = useState(false)

  const handleClick = (e) => {
    setFreelancer(!freelancer)
  }

  const clickLog = () => {
    navigate('/login')
  }

  const displayFreel = (
    <div className="select">
         <InputLabel id="select-title">Service</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Services"
          value="Service"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </div>
  )

    return (
      <div className="login-box" id={"sBoxColor"}>
      <h2>{"Sign Up"}</h2>
      <form>
          <div className="user-box">
          <input type="text" name="name" required="true"/>
          <label>Username</label>
          </div>
          <div className="user-box">
          <input type="email" name="name" required="true"/>
          <label>Email</label>
          </div>
          <div className="user-box">
          <input type="password" name="name" required="true"/>
          <label>Password</label>
          </div>
          <div className="user-box">
          <input type="password" name="name" required="true"/>
          <label>Confirm Password</label>
          </div>
          {freelancer?displayFreel:null}
          <Button type='submit' id='submitLogin'>{"Sign Up"}</Button>
          <div className='sbutton'>
          <Button onClick={handleClick} id='submitSignUp'>{freelancer?"Sign up as a User":"Sign up as a Freelancer"}</Button>
          </div>
          <div className='sbutton'>
          <Button onClick={clickLog} id='go-to-login'>Go to LogIn</Button>
          </div>
      </form>
  </div>
    );
}

export default SignupUser;