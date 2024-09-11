import React from 'react'

import { Link, useParams } from 'react-router-dom';
import { useState,useEffect} from 'react'; 
import Update from './update';
import Modal from '@mui/material/Modal';
import Delete from './Delete';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
// import Userinfo from './Userinfo';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import { useLocation } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import {useHistory} from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import { alignProperty } from '@mui/material/styles/cssUtils';








import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Utable() {

 

  let initialValue;
  if(localStorage.getItem("job-details")===null){
    initialValue=[];
  } else {
    initialValue=JSON.parse(localStorage.getItem("job-details"));
  }
  const[value,setValue]=useState(initialValue);
  const[user,setUser]=useState();


  const handleChange=(e)=>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    });
  }
  console.log(user,'job-details');


  const [data,setData]=useState([]);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [selectedUser,setSelectedUser]=useState('');
  const [savedJobs, setSavedJobs] = useState([]);


  const handleSaveJob = (job) => {
    setSavedJobs([...savedJobs, job]);
    localStorage.setItem("saved-jobs", JSON.stringify([...savedJobs, job]));
  };

  useEffect(() => {
    const savedJobsFromStorage = JSON.parse(localStorage.getItem("saved-jobs")) || [];
    setSavedJobs(savedJobsFromStorage);
  }, []);

  useEffect(()=>{
    setData(JSON.parse(localStorage.getItem("job-details")));
  },[])
  console.log(data,'Data');

  const handleUpdate=(id) => {
    setOpen(true)
    setSelectedUser(id)
    console.log(selectedUser,'selected');
  };

  const handleDelete=(id)=>{
    setOpen2(true)
    setSelectedUser(id)
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open7 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{ height: 400, width: '100%',backgroundImage: `url('https://e0.pxfuel.com/wallpapers/167/956/desktop-wallpaper-simple-dark-blue-background-8-simple-abstract.jpg')`,backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', backgroundAttachment: 'fixed',paddingBottom: '500vh',}}>






<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense" >
          <IconButton onClick={handleClick} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open7}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem >   <Link to={'/Udemo'}> HOME PAGE</Link></MenuItem>
        <MenuItem >   <Link to={'/Save'}> SAVED JOBS</Link></MenuItem></Menu>
    <Typography variant="h4" color="inherit" component="div"  textAlign="center" marginLeft="400px" fontFamily="bold" ><b>LIST OF JOBS</b></Typography>
    </Toolbar>
    </AppBar></Box>

 
{/* 
<Typography variant="h2" gutterBottom style={{fontSize:'40px',textAlign: 'center',color:'white',fontFamily:'bold'}}>
        <b>List of jobs </b>
      </Typography>
      */}
      
<div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around', // Adjust as needed
            marginTop:'50px'
          }} >
 
       {/* {books.map((i,index) => ( */}
        {data.map((i, index) => (
          <Card key={i.id} sx={{  width: 300, margin: '20px' }}>
            
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={i.img}
                alt={i.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {i.TITLE}
                </Typography>
                <Typography variant="body2" color="text.secondary">
               <b> DESCRIPTION:</b> {i.DESCRIPTION}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <b> EXPERIENCE: </b>{i.EXPERIENCE}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <b> SALARY: </b>{i.SALARY}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <b> LOCATION: </b>{i.LOCATION}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                IMAGE: {i.img}
                </Typography> */}
              </CardContent>
            </CardActionArea>
           
            <Link to={`/viewOne/${i.u_id}`}><Button style={{marginLeft:'210px',backgroundColor:'black'}} variant="contained" >view</Button></Link>
{/*           
              <Link to={`/Save`}>             
<div>
     
      <Checkbox {...label} icon={<BookmarkBorderIcon />}checkedIcon={<BookmarkIcon />} />
    </div>
    </Link> */}

{/* Step 3: Save button */}
 <Link to={`/Save`}> 
 <IconButton
              aria-label="Save"
              onClick={() => handleSaveJob(i)}
            >
              <BookmarkBorderIcon />
            </IconButton>
</Link>
          </Card>
         ))}

        
        </div>
       
       
<Modal
  open={open}
  // onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
> 
<div>
<Update setData={setData} data={data} setOpen={setOpen} selectedUser={selectedUser} />
</ div></Modal>
<br />
<Modal
  open={open2}
  // onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
> 
<>
<Delete setData={setData} data={data} setOpen2={setOpen2} selectedUser={selectedUser} />
</></Modal>
<br />

    

    <div style={{display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',}}>
                <Link to={'/Udemo'}>
        <Button variant="contained" style={{width:'410px',height:'50px'}}>HOME PAGE</Button></Link>
        
        </div>
    
    </div>
  )
}





