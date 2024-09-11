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
import { Button, CardActionArea, CardActions } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { useLocation } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Menu from '@mui/material/Menu';
import { alignProperty } from '@mui/material/styles/cssUtils';
import MenuItem from '@mui/material/MenuItem';




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

export default function table() {

  
  const [data,setData]=useState([]);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [selectedUser,setSelectedUser]=useState('');

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
    backgroundRepeat: 'no-repeat',padding:'20px',
    minHeight: '100vh', backgroundAttachment: 'fixed',paddingBottom: '300vh',}}>


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
        <MenuItem >   <Link to={'/demo'}> HOME PAGE</Link></MenuItem>
        <MenuItem ><Link to={'/front'}>ADD JOBS</Link></MenuItem>
        
      </Menu>
    <Typography variant="h4" color="inherit" component="div" textAlign="center" marginLeft="400px" fontFamily="bold">
      <b>LIST OF JOBS</b>
    </Typography>
    </Toolbar>
    </AppBar></Box>

{/* 
<Typography variant="h2" gutterBottom style={{fontSize:'50px',textAlign: 'center',color:'white',fontFamily:'bold'}}>
        <b>List of jobs </b>
      </Typography> */}
     
      
<div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap:'20px',
            marginTop:'80px'
            // justifyContent: 'space-around', // Adjust as needed
          }}
          >
 
       {/* {books.map((i,index) => ( */}
        {data.map((i, index) => (
          <Card key={i.id} sx={{  width: 350,marginLeft:'15px' }}>
            
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
               image={i.img}
               alt={i.TITLE}
               
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {i.TITLE}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <b>DESCRIPTION:</b> {i.DESCRIPTION}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <b>EXPERIENCE: </b>{i.EXPERIENCE}
                </Typography>
                
                <Typography variant="body2" color="text.secondary">
                <b>SALARY:</b> {i.SALARY}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <b>LOCATION:</b> {i.LOCATION}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                IMAGE: {i.IMAGE}
                </Typography> */}
              </CardContent>
            </CardActionArea>
            <IconButton aria-label="Update" onClick={()=>handleUpdate(i)}><UpdateIcon /></IconButton>
            <IconButton aria-label="Delete" onClick={()=>handleDelete(i.u_id)}><DeleteIcon /></IconButton>
            <Link to={`/viewOne/${i.u_id}`}><IconButton aria-label="View"><VisibilityIcon /></IconButton></Link>
           
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

        {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>    
            <StyledTableCell>SI.NO</StyledTableCell>
            <StyledTableCell align="right">TITLE</StyledTableCell>
            <StyledTableCell align="right">AUTHOR</StyledTableCell>
            <StyledTableCell align="right">CATEGORY</StyledTableCell>
            <StyledTableCell align="right">NUMBER OF BOOKS</StyledTableCell>
            <StyledTableCell align="center" colSpan={3}>ACTIONS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {data?.map((i,index) => (
            <StyledTableRow key={i.index}>
              <StyledTableCell component="th" scope="row">
               {index+1}
              </StyledTableCell>
              <StyledTableCell align="right">{i.title}</StyledTableCell>
              <StyledTableCell align="right">{i.author}</StyledTableCell>
              <StyledTableCell align="right">{i.category}</StyledTableCell>
              <StyledTableCell align="right">{i.numberOfBooks}</StyledTableCell>
              <StyledTableCell align="right"><Button variant="outlined" onClick={()=>handleUpdate(i)} >UPDATE</Button></StyledTableCell>
              <StyledTableCell align="right"><Button variant="outlined" onClick={()=>handleDelete(i.u_id)} >DELETE</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}

    {/* <Modal
  open={open}
  // onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
> 
<>
<Update setData={setData} data={data} setOpen={setOpen} selectedUser={selectedUser} />
</></Modal> */}

{/* <Modal
  open={open2}
  // onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
> 
<>
<Delete setData={setData} data={data} setOpen2={setOpen2} selectedUser={selectedUser} />
</></Modal>
<br /> */}


    <div style={{display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',}}>
                <Link to={'/demo'}>
        <Button variant="contained" style={{width:'410px',height:'50px'}}>HOME PAGE</Button></Link>
        <Link to={'/front'}> <Button variant="contained" style={{width:'410px',height:'50px'}}>ADD JOBS</Button></Link>
        </div>
    
    </div>
  )
}







// import React, { useState,useEffect } from 'react'
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import  Button  from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Update from './update';
// import {Link} from 'react-router-dom';
// import Delete from './Delete';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import UpdateIcon from '@mui/icons-material/Update';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import Demo from './demo';




// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };


// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));


// export default function table() {
  
//   const [data,setData]=useState([]);
//   const [open, setOpen] = React.useState(false);
//   const [open2, setOpen2] = React.useState(false);
//   const [selectedUser,setSelectedUser]=useState('');

  // useEffect(()=>{
  //   setData(JSON.parse(localStorage.getItem("student")));
  // },[])
  // console.log(data,'Data');

//   const handleUpdate=(id) => {
//     setOpen(true)
//     setSelectedUser(id)
//     console.log(selectedUser,'selected');
//   };

//   const handleDelete=(id)=>{
//     setOpen2(true)
//     setSelectedUser(id)
//   }

//     return (
//         <div>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>SI-NO</StyledTableCell>
//               <StyledTableCell align="right">TITLE</StyledTableCell>
//               <StyledTableCell align="right">DESCRIPTION</StyledTableCell>
//               <StyledTableCell align="right">EXPERIENCE</StyledTableCell>
//               <StyledTableCell align="right">SALARY</StyledTableCell>
//               <StyledTableCell align="right">IMAGE</StyledTableCell>
//               <StyledTableCell align="center" colSpan={3}>Action</StyledTableCell>
              
//             </TableRow>
//           </TableHead>
//           <TableBody>
//           {data?.map((i,index)=>(
//             // {rows.map((row) => (
//               <StyledTableRow key={i.index}>
//                 <StyledTableCell component="th" scope="row">
//                 {index+1}
//                   {/* {row.name} */}
//                 </StyledTableCell>
//                 <StyledTableCell align="right">{i.TITLE}</StyledTableCell>
//                 <StyledTableCell align="right">{i.DESCRIPTION}</StyledTableCell>
//                 <StyledTableCell align="right">{i.EXPERIENCE}</StyledTableCell>
//                 <StyledTableCell align="right">{i.SALARY}</StyledTableCell>
//                 <StyledTableCell align="right">{i.IMAGE}</StyledTableCell>
//                 <StyledTableCell align="right"><Link to={`/viewOne/${i.u_id}`}><Button variant="outlined"><VisibilityIcon /></Button></Link></StyledTableCell>
//                 <StyledTableCell align="right"><Button variant="outlined" onClick={()=> handleUpdate(i)}><UpdateIcon /></Button></StyledTableCell>
//                 <StyledTableCell align="right"><Button variant="outlined" onClick={()=>handleDelete(i.u_id)}><DeleteForeverIcon /></Button></StyledTableCell>
//               </StyledTableRow>
//             ))}
//           </TableBody>
          
//         </Table>
//       </TableContainer>

//       <Modal
//   open={open}
//   // onClose={handleClose}
//   aria-labelledby="modal-modal-title"
//   aria-describedby="modal-modal-description"
// >
// <>
// <Update setData={setData} data={data} setOpen={setOpen}  selectedUser={selectedUser} />
// </>
// </Modal>

// <Modal
//   open={open2}
//   // onClose={handleClose}
//   aria-labelledby="modal-modal-title"
//   aria-describedby="modal-modal-description"
// >
// <>
// <Delete setData={setData} data={data} setOpen2={setOpen2}  selectedUser={selectedUser} />
// </>
// </Modal>


//       <br/>
//      <Link to='/front' ><div style={{textAlign:'center'}}><Button variant="contained" style={{width:'1180px'}} >Insert New</Button></div></Link>
   
//       </div>
//     )
//         }





