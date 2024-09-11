 import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState,useEffect} from 'react';
import {Link, Router} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Switch } from '@mui/material';


export default function demo() {
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
    const newUserId=value.length===0?1:value[value.length-1].u_id+1;

    const details={
      u_id:newUserId,
      ...user
    };

    const updatedValue=[...value,details];
    setValue(updatedValue);

    console.log(updatedValue,'updated');

    localStorage.setItem("job-details",JSON.stringify(updatedValue));
    
    await navigate('/table');

  };


  
  return (
    
    
    <div style={{ height: 400, width: '100%',backgroundImage:`url('https://img.freepik.com/free-photo/office-supplies_23-2148103974.jpg?w=740&t=st=1693310587~exp=1693311187~hmac=8b896f1f200831016114a3473339e076de127d98dde1a20e29d93e484bb75da6')`,backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', backgroundAttachment: 'fixed',paddingBottom: '100vh',}}>


    <div style={{textAlign:'center',padding:'50px',marginTop:'20px'}}>
    <Typography variant="h4" gutterBottom style={{fontFamily:'Cooper Black'}}>
    Enter job details
  </Typography>
  <TextField  onChange={handleChange} name="TITLE" id="outlined-basic" label="TITLE*" variant="outlined"  style={{width:'410px'}}/>
  <br />
  <br />
 
        <TextField onChange={handleChange} name="DESCRIPTION" rows='2' id="outlined-number" label="DESCRIPTION*"  style={{width:'400px'}}/>
        < br/>
        <br/>
  
        <TextField onChange={handleChange} name="EXPERIENCE" id="outlined-basic" label="EXPERIENCE*" variant="outlined" style={{width:'400px'}} />
        < br/>
        <br/>
        <TextField onChange={handleChange} name="SALARY" id="outlined-basic" label="SALARY*"  variant="outlined" style={{width:'400px'}}/>
        < br/>
        <br/>
        <TextField onChange={handleChange} name="LOCATION" id="outlined-basic" label="LOCATION*"  variant="outlined" style={{width:'400px'}}/>
        < br/>
        <br/>
        <TextField onChange={handleChange} name="img" id="outlined-basic" label="IMAGE*"  variant="outlined" style={{width:'400px'}}/>
        < br/>
        <br/>
        <Button  onClick={handleSubmit} variant="contained"  color="success" style={{width:'410px'}}>Insert</Button>
        < br/>
        <br/>
        <Link to={'/table'}>
        <Button variant="contained" color="success" style={{width:'410px'}}>view all jobs</Button>
        </Link>
        </div>
  </div>
  )
}