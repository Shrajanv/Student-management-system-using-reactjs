import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';



export default function update({ setOpen, selectedUser, data, setData }) {


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    // bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 8,
  };

  const [updatedUser, setUpdatedUser] = useState(selectedUser);
  const [index, setIndex] = useState('');

  useEffect(() => {
    const index = (data.findIndex((e) => e.u_id == selectedUser.u_id))
    setIndex(index);
  })

  const handleChange = (e) => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedData = [...data];
    updatedData.splice(index, 1, updatedUser);
    console.log(updatedData);
    setData(updatedData);
    localStorage.setItem("job-details", JSON.stringify(updatedData))
    await setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };




  return (

<div>
        <div style={{ textAlign: 'center', backgroundColor:'lightyellow',padding:'20px'}}>
          <Typography variant="h5" gutterBottom>
            <i>Updation Form</i>
          </Typography>
          <TextField onChange={handleChange} name="TITLE" id="outlined-basic" label="TITLE*" variant="outlined" value={updatedUser.TITLE} style={{ width: '400px' }} />
          <br />
          <br />
          <TextField onChange={handleChange} multiline rows='1' name="DESCRIPTION" id="outlined-number" label="DESCRIPTION*" value={updatedUser.DESCRIPTION} style={{ width: '400px' }} />
          < br />
          <br />
          <TextField onChange={handleChange} name="EXPERIENCE" id="outlined-basic" label="EXPERIENCE*" variant="outlined" value={updatedUser.EXPERIENCE} style={{ width: '400px' }} />
          < br />
          <br />
          <TextField onChange={handleChange} name="SALARY" id="outlined-basic" label="SALARY*" variant="outlined" value={updatedUser.SALARY} style={{ width: '400px' }} />
          < br />
          <br />
          <TextField onChange={handleChange} name="LOCATION" id="outlined-basic" label="LOCATION*" variant="outlined" value={updatedUser.LOCATION} style={{ width: '400px' }} />
          < br />
          <br />
          <TextField onChange={handleChange} name="img" id="outlined-basic" label="IMAGE*" variant="outlined" value={updatedUser.img} style={{ width: '400px' }} />
          < br />
          <br />
          <Button onClick={handleSubmit} variant="contained" style={{ width: '400px',backgroundColor:'black' ,marginTop:'-25px'}}>UPDATE</Button>
          < br />
          <br />

          <Button onClick={() => handleClose()} variant="contained" style={{ width: '400px' ,marginBottom:'20',marginTop:'-20px',backgroundColor:'black'}}>CANCEL</Button>
        </div>
 
    </div>
  )
}
