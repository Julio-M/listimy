import React, { useState } from "react";
import { Button } from "@mui/material";
import './login.css'
import { useNavigate } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function Login ({onLogin , accountType, setAccountType}) {
    let navigate = useNavigate();

    const [userForm, setUserForm] = useState({
        username:'',
        password:''
    })

    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const postDataUser = () => {
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userForm),
            }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
              r.json().then((user) => onLogin(user)).then(navigate('/'));
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          })
    }

    const postDataFreelancer = () => {
      fetch("/login-freelancer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userForm),
        }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => onLogin(user)).then(navigate('/myprofile'));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      })
    }

    const {username,password} = userForm

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUserForm({...userForm, [name]:value})
    }

    const handleClick = () => {
        navigate('/signup-user')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        accountType==='user'?postDataUser():postDataFreelancer()
    }

    const changeType = (e) => {
      const value = e.target.value
      setAccountType(value)
    }

    return (
      <div className="login-box" id={"sBoxColor"}>
      <h2>{accountType==='user'?"User Login":"Freelancer Login"}</h2>
      <form onSubmit={handleSubmit}>
          <div className="user-box">
          <input onChange={handleChange} type="text" name="username" required="true" value={username}/>
          <label>Username</label>
          </div>
          <div className="user-box">
          <input onChange={handleChange} type="password" name="password" required="true" value={password}/>
          <label>Password</label>
          </div>
          <div className='radiobutton'>
          <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="user"
              name="radio-buttons-group"
          >
          <FormControlLabel onChange={changeType} value="user" control={<Radio style={{color:'white'}} />} label="Log in as a User" />
          <FormControlLabel onChange={changeType} value="freelancer" control={<Radio style={{color:'white'}}/>} label="Log in as a Freelancer" />
          </RadioGroup>
          </div>
          <Button type='submit' id='submitLogin'>{isLoading ? "Loading..." : "Login"}</Button>
          <div> {errors.map((err) => (
          <p key={err}>{err}</p>
                ))}</div>
          <div className='sbutton'>
          <Button onClick={handleClick} id='go-to-sign-up'>Go to Sign Up</Button>
          </div>
      </form>
  </div>
    );
}

export default Login;