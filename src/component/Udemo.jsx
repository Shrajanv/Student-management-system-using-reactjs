
import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState,useEffect} from 'react';
import {Link, Router} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Paper, Switch } from '@mui/material';
import Box from '@mui/material/Box';





export default function Udemo() {
 
  let navigate=useNavigate()
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
  

  const handleSubmit=async(event)=>{

  
    
    event.preventDefault();
    const newUserId=value.length===0?1:value[value.length-1].id+1;

    const details={
      id:newUserId,
      ...user
    };

    const updatedValue=[...value,details];
    setValue(updatedValue);

    console.log(updatedValue,'updated');

    localStorage.setItem("job-details",JSON.stringify(updatedValue));
    
    await navigate('/table');

  };



  return (
   

    <div style={{ height: 400, width: '100%',backgroundImage: `url('https://campushunt.in/blog/wp-content/uploads/2018/09/how-to-choose-a-career-path-confused-student-on-a-road-1024x683.jpg')`,backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', backgroundAttachment: 'fixed',paddingBottom: '100vh',}}>

    <div style={{ height: 400, width: '100%',backgroundImage: `url('  </div>  ')`,backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', backgroundAttachment: 'fixed',paddingBottom: '100vh',}}>

    
    <div style={{textAlign:'left',padding:'50px',fontFamily:'fantasy',fontSize:'40px' }}>
    <Typography variant="h2" gutterBottom style={{fontFamily:'Cooper Black'}}>
    <b>SEARCHING <br/>FOR  <br/>JOBS?</b>
   </Typography>
        <br/>
        <Typography  style={{fontFamily:'Cooper Black',marginLeft:'600px',marginTop:'50px', fontSize:'30px',marginLeft:'900px'}}>CLICK  THE BUTTON<br/> TO VIEW ALL JOBS  </Typography> 
        <br/>

        <Link to={'/Utable'}>
        <Button   variant="contained" style={{fontFamily:'monospace',marginLeft:'750px',marginTop:'-500px', fontSize:'20px',width:'130px' , height:'60px',backgroundColor:'black'}}>JOBS LIST </Button> </Link>
        < br/>
        <br/>
        </div>  
        </div>  
     </div>
      
  )
      }

