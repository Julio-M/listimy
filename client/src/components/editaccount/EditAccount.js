import React, { useState } from "react";
import './editaccount.css'
import { Button } from "@mui/material";
import axios from 'axios'
import CryptoJS from 'crypto-js'
import { useNavigate } from "react-router-dom";

const md5FromFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = (fileEvent) => {
      let binary = CryptoJS.lib.WordArray.create(fileEvent.target.result)
      const md5 = CryptoJS.MD5(binary)
      resolve(md5)
    }
    reader.onerror = () => {
      reject ('oops, something went wrong')
    }
    reader.readAsArrayBuffer(file)
  })
}

export const fileCheckSum = async(file) => {
  const md5 = await md5FromFile(file)
  const checksum = md5.toString(CryptoJS.enc.Base64)
  return checksum
}


function EditAccount ({currentUser,setCurrentUser}) {
    let navigate = useNavigate();  

    const deleteUser = (sid) => {
      fetch(`users/${sid}`, {
          method: "DELETE"
      }).then(setCurrentUser(null)).then(navigate('/login'))
      .catch( error => console.log(error.message));
    }

    const handleDelete = () => {
      deleteUser(currentUser.id)
    }

    const [submitted, setSubmitted] = useState(false)

    const [editUser, setEditUser] = useState({})
    
    const [isUpProfile, setIsUpProfile] =useState(false)
    const [isUpCover, setIsUpCover] =useState(false)
    const [file, setFile] = useState("")
    const [myImage, setMyImage] = useState("")
    const [cover, setCover] = useState("")
    const {account_type} = currentUser

    const createPresignedUrl = async (file, byte_size, checksum) => {
      let options = {
        method: 'POST',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          file: {
            filename: file.name,
            byte_size: byte_size,
            checksum: checksum,
            content_type: 'image/png',
            metadata: {
              'message':'profile image'
            }
          }
        })
      }
      let res = await fetch('/presigned_url', options)
      if (res.status !== 200) return res
      return await res.json()
    }

    const updateUser = async (e) => {
      e.preventDefault()
      if (file) {
        console.log(file)
        const checksum = await fileCheckSum(file)
        const presignedFileParams = await createPresignedUrl(file, file.size, checksum)
        console.log(presignedFileParams)
        const s3PutOptions = {
          method: 'PUT',
          headers: presignedFileParams.direct_upload.headers,
          body: file
        }
        console.log(s3PutOptions)
        let awsRes = await fetch (presignedFileParams.direct_upload.url, s3PutOptions)
        if (awsRes.status !== 200) return awsRes

        let userPatchOptions = {
          method: 'PATCH',
          headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body: JSON.stringify({
            image: presignedFileParams.blob_signed_id
          })
        }
        let res = await fetch (`/users/${currentUser.id}`,userPatchOptions)
        const newuser = await res.json()
        console.log(newuser)
        setCurrentUser(newuser)
      }
    }


    // const handleImageSubmit = (e) =>{
    //   const formData = new FormData()
    //   formData.append("file", myImage)
    //   formData.append("upload_preset", "dyza3ykz")

    //   axios.post("https://api.cloudinary.com/v1_1/dimfaeuml/image/upload",formData,{
    //       onUploadProgress: progress => {
    //           if(Math.round(progress.loaded/progress.total*100)===100){
    //             setIsUpProfile(true)
    //           }
    //       }
    //   })
    //   .then(res=>setEditUser({...editUser, "profile_picture":res.data.secure_url}))
    //   // .then(()=>setIsLoading(0))

    // }

    const handleCoverImageSubmit = (e) =>{
      const formData = new FormData()
      formData.append("file", myImage)
      formData.append("upload_preset", "dyza3ykz")

      axios.post("https://api.cloudinary.com/v1_1/dimfaeuml/image/upload",formData,{
          onUploadProgress: progress => {
              if(Math.round(progress.loaded/progress.total*100)===100){
                setIsUpCover(true)
              }
          }
      })
      .then(res=>setEditUser({...editUser, "cover_photo":res.data.secure_url}))
      // .then(()=>setIsLoading(0))

    }

    const patchData = () => {
      fetch(`/update-profile`, {
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
      )).then(setSubmitted(true))
      .catch( error => console.log(error.message));
    }

    const handleChange = (e) => {
      const name = e.target.name
      let value = e.target.value

      console.log('Name',name)
      console.log('Value',value)
      setEditUser({...editUser,[name]:value})
    }

//     const handleUpload = (e) =>{
//       const file = e.target.files[0]
//       setMyImage(file)
//   }

  const handleCoverUpload = (e) =>{
    const file = e.target.files[0]
    setMyImage(file)
}

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('Sent data')
      patchData()
    }

    const displayFree = (
      <>
      <div className="user-box">
      <input onChange={handleChange} type="text" name="location"/>
      <label>Location</label>
      </div>
      </>
    )


    return (
        <>
        <div className="edit-box" id={"sBoxColor"}>
      <h2>Edit your profile</h2>
        <form onSubmit={handleSubmit}>
            <div className="user-box">
            <input onChange={(e)=> setFile(e.target.files[0])} name='profile-picture'type='file'/>
            <Button onClick={updateUser} className='upload btn-upload' id='btn-upload-profile'>Upload Profile Picture</Button>
            
            <label>Change your profile picture</label>
            </div>
            <div className="user-box">
            <input onChange={handleCoverUpload} name="cover_photo" type='file'/>
            <Button onClick={handleCoverImageSubmit} className='upload btn-upload'id='btn-upload-cover'>Upload Cover Photo</Button>
            {isUpCover?<p className='upload'>Done</p>:null}
            <label>Change your cover photo</label>
            </div>
            <div className="user-box">
            <input onChange={handleChange} type="text" name="username"/>
            <label>Username</label>
            </div>
            {account_type==='user'?null:displayFree}
            <Button type='submit' id='submitEdit'>Submit</Button>
            {submitted?<p className='upload'>Done</p>:null}
            <div className='sbutton'>
            <Button onClick={handleDelete} id='go-to-sign-up'>Delete User</Button>
          </div>
        </form>
  </div>
    
        </>
    );
}

export default EditAccount;