import React, { useState } from "react";
import './editaccount.css'
import { Button } from "@mui/material";

function EditAccount ({currentUser}) {

    const {account_type} = currentUser

    const displayFree = (

            <div className="user-box">
            <input type="text" name="password"/>
            <label>Location</label>
            </div>
    )

    return (
        <>
        <div className="edit-box" id={"sBoxColor"}>
      <h2>Edit your profile</h2>
        <form onSubmit={(e)=>console.log('click')}>
            <div className="user-box">
            <input type='file'/>
            <label>Change your profile picture</label>
            </div>
            <div className="user-box">
            <input type='file'/>
            <label>Change your cover photo</label>
            </div>
            <div className="user-box">
            <input type="text" name="username"/>
            <label>Username</label>
            </div>
            {account_type==='user'?null:displayFree}
            <Button type='submit' id='submitEdit'>Submit</Button>
            <div className='sbutton'>
            <Button id='go-to-sign-up'>Delete User</Button>
          </div>
        </form>
  </div>
    
        </>
    );
}

export default EditAccount;