
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
import Geocode from "react-geocode";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tooltip from '@mui/material/Tooltip';

const Services = ({setCenter, freelancer,setViewFreelancer}) => {
    let navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

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
      Geocode.fromAddress(freelancer.location).then(
        res => {
            const {lat, lng} = res.results[0].geometry.location
            console.log({lat, lng})
            setCenter({lat, lng})
        }
        )
    }

    const handleNavigate = () => {
      navigate('/freelancer')
    }
    
    return (
        <>
            <ListItemButton onClick={handleClick} alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="profile picture" src= {freelancer.profile_picture} />
                </ListItemAvatar>
                <ListItemText
                primary={freelancer.username}
                secondary={
                    <>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                       
                    {freelancer.location?freelancer.location:freelancer.location="144 Fulton St, New York, NY, 10038"}
                    </Typography>
                    </>
                }
                />
            <Tooltip title="Click for more">
                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </Tooltip>
            </ListItemButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
               
               
                {freelancer.services.map((service) => {
                    return (
                    <>
                    <ListItemText primary={service.service_name} />
                    <Divider/>
                    </>    
                    )
                })}
                
                <Button onClick={handleNavigate}>Go to profile</Button>
                    <div> {errors.map((err) => (
                        <p key={err}>{err}</p>
                            ))}
                    </div>
               
            </List>
            </Collapse>
        </>
    )
    
}
export default Services