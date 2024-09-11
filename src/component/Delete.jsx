import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Delete({setOpen2,selectedUser,data,setData}) {
        
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

    const handleClose=()=>{
        setOpen2(false);
    }
    
    const handleDelete=async(id)=>{
        const updatedData=data.filter((e)=>e.u_id !==id);
        console.log(updatedData);
        setData(updatedData);
        localStorage.setItem("job-details",JSON.stringify(updatedData));
        await setOpen2(false);
    }
    // backgroundImage: `url('https://e0.pxfuel.com/wallpapers/744/515/desktop-wallpaper-background-simple-blue-blue-cute-blue-and-blue-christmas-basic-white.jpg')`,
  return (
    <div style={{ height: 400, width: '100%',backgroundSize: 'cover',backgroundColor:'black',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', backgroundAttachment: 'fixed',paddingBottom: '100vh',}}>

    <Card sx={style}>
      <CardContent>
        <h2>Attempting to delete!</h2>
        <Typography variant="body2" scolor="text.secondary" gutterBottom>
          <b>Are you sure,you want to delete the record?</b>
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="error" onClick={()=>handleClose()} size="small">Cancel</Button>
        <Button color="primary"  onClick={()=>handleDelete(selectedUser)} size="small">Yes, Delete</Button>
        </CardActions>
    
    </Card>
    </div>
  );
}
