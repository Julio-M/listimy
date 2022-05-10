
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Services = ({freelancer}) => {
    console.log(freelancer)
    
    return (
      <ListItemButton alignItems="flex-start">
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
            </>
          }
        />
      </ListItemButton>
    )
    
}
export default Services