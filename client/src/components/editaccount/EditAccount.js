import React, { useState } from "react";
import './editaccount.css'
import { Button } from "@mui/material";
import axios from 'axios'
import { valueToPercent } from "@mui/base";

function EditAccount ({currentUser,setCurrentUser}) {  

    const [editUser, setEditUser] = useState({})
    
    const [isUp, setIsUp] =useState(false)

    const [myImage, setMyImage] = useState("")

    const {account_type} = currentUser

    const handleImageSubmit = (e) =>{
      const formData = new FormData()
      formData.append("file", myImage)
      formData.append("upload_preset", "dyza3ykz")

      axios.post("https://api.cloudinary.com/v1_1/dimfaeuml/image/upload",formData,{
          onUploadProgress: progress => {
              if(Math.round(progress.loaded/progress.total*100)===100){
                setIsUp(false)
              }
          }
      })
      .then(res=>setEditUser({...editUser, "profile-picture":res.data.secure_url}))
      // .then(()=>setIsLoading(0))

    }

    const patchData = () => {
      fetch(`/me-freelancer`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
          },
          body: JSON.stringify(editUser)
      })
      .then( res => res.json())
      .then( data => setCurrentUser( ()=> {
        if(currentUser.id===data.id) return data
        return currentUser
      }
      ))
      .catch( error => console.log(error.message));
    }

    const handleChange = (e) => {
      const name = e.target.name
      let value = e.target.value

      console.log('Name',name)
      console.log('Value',value)
      setEditUser({...editUser,[name]:value})
    }

    const handleUpload = (e) =>{
      const file = e.target.files[0]
      setMyImage(file)
  }

    const handleSubmit = (e) => {
      e.preventDefault()
      handleImageSubmit()
      console.log(myImage)
      console.log('Sent data')
      patchData()
    }

    const handleDelete = (e) => {
      console.log('here')
    }

    const displayFree = (

      <div className="user-box">
      <input onChange={handleChange} type="text" name="location"/>
      <label>Location</label>
      </div>
    )

    return (
        <>
        <div className="edit-box" id={"sBoxColor"}>
      <h2>Edit your profile</h2>
        <form onSubmit={handleSubmit}>
            <div className="user-box">
            <input onChange={handleUpload} name='profile-picture'type='file'/>
            <label>Change your profile picture</label>
            </div>
            <div className="user-box">
            <input onChange={handleChange} name="cover_photo" type='file'/>
            <label>Change your cover photo</label>
            </div>
            <div className="user-box">
            <input onChange={handleChange} type="text" name="username"/>
            <label>Username</label>
            </div>
            {account_type==='user'?null:displayFree}
            <Button type='submit' id='submitEdit'>Submit</Button>
            <div className='sbutton'>
            <Button onClick={handleDelete} id='go-to-sign-up'>Delete User</Button>
          </div>
        </form>
  </div>
    
        </>
    );
}

export default EditAccount;