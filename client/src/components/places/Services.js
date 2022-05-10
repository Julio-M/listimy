
import React, { useState } from "react";
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Services = ({freelancer,setViewFreelancer}) => {
    let navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const postDataFreelancer = () => {
      fetch(`/show-freelancer`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(freelancer),
        }).then((r) => {
        if (r.ok) {
          r.json().then(user=>setViewFreelancer(user))
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      })
    }

    const handleClick = () => {
      setViewFreelancer(freelancer)
      postDataFreelancer()
    }

    const handleNavigate = () => {
      navigate('/freelancer')
    }
    
    return (
      <ListItemButton onClick={handleClick} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="profile picture" src= {freelancer.profile_picture} />
        </ListItemAvatar>
        <ListItemText
          primary={freelancer.services.map((service)=>service.service_name)}
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {freelancer.username}
              </Typography>
              {freelancer.location?freelancer.location:freelancer.location="144 Fulton St, New York, NY, 10038"}
              <Button onClick={handleNavigate}>Go to profile</Button>
              <div> {errors.map((err) => (
              <p key={err}>{err}</p>
                ))}</div>
            </>
          }
        />
      </ListItemButton>
    )
    
}
export default Services