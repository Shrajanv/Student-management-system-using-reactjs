import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';
import {useState,useEffect} from 'react';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function SingleView() {

    const [data,setData]=useState([]);
    const [single,setSingle]=useState([]);
    var a;
    const {id}=useParams();
    console.log(id,'userid')

    useEffect(()=> {
        a=JSON.parse(localStorage.getItem("job-details"));
        setData(a);
    }, []);
    console.log(data,'userdetails')

    useEffect(()=>{
        setSingle(a.filter((e)=>e.u_id==id));
    },[]);
    console.log(single,'singleuser');

  return (
    
    <div style={{ height: 400, width: '100%',backgroundImage: `url('https://e0.pxfuel.com/wallpapers/744/515/desktop-wallpaper-background-simple-blue-blue-cute-blue-and-blue-christmas-basic-white.jpg')`,backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', backgroundAttachment: 'fixed',paddingBottom: '100vh',}}>



    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow >
            <StyledTableCell>TITLE</StyledTableCell>
            <StyledTableCell align="center">DESCRIPTION</StyledTableCell>
            <StyledTableCell align="right">EXPERIENCE</StyledTableCell>
            <StyledTableCell align="right" >SALARY</StyledTableCell>
            <StyledTableCell align="right" >LOCATION</StyledTableCell>
            <StyledTableCell align="right" >IMAGE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {single.map((row) => (
            <StyledTableRow>
              <StyledTableCell component="th" >{row.TITLE}</StyledTableCell>
                <StyledTableCell align="right">{row.DESCRIPTION}</StyledTableCell>
              <StyledTableCell align="right">{row.EXPERIENCE}</StyledTableCell>
              <StyledTableCell align="right">{row.SALARY}</StyledTableCell>
              <StyledTableCell align="right">{row.LOCATION}</StyledTableCell>
              <StyledTableCell align="right">{row.img}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></div>
  );
}
