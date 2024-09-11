
import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState,useEffect} from 'react';
import {Link, Router} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Paper, Switch } from '@mui/material';
import Box from '@mui/material/Box';





export default function front() {
 
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


    
    <div style={{ height: 400, width: '100%',backgroundImage: `url('https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-03.jpg')`,backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', backgroundAttachment: 'fixed',paddingBottom: '100vh',}}>


    <div style={{textAlign:'center',fontFamily:'bold' ,marginRight:'50px'}}>
    <Button variant="contained" style={{marginTop:'50px', width:'1110px', height:'100px',fontSize:'60px',fontFamily:'monospace',color:'white'}}>
    <b>JOB LISTS</b>
  </Button>

        <br/>
        <Link to={'/table'}>
        <Button size="large" onClick={handleSubmit} variant="contained" style={{fontFamily:'serif',marginTop:'110px', width:'410px' , height:'100px',fontSize:'40px',backgroundColor:'black',marginRight:'700px'}}>VIEW JOBS</Button> </Link>
        < br/>
        <br/>
        <Link to={'/front'}>
        <Button size="large" variant="contained"  style={{fontFamily:'serif',marginTop:'50px', width:'410px', height:'100px',backgroundColor:'black',marginLeft:'600px',fontSize:'40px'}}>ADD JOBS</Button>
        </Link>
        </div> 
        </div> 
      
  )
      }

