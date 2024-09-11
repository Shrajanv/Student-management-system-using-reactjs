import * as React from 'react';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';
import {useState,useEffect} from 'react';
import Modal from '@mui/material/Modal';
import Delete from './Delete';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



export default function Save() {

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [selectedUser,setSelectedUser]=useState('');
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const savedJobsFromStorage = JSON.parse(localStorage.getItem("saved-jobs")) || [];
    setSavedJobs(savedJobsFromStorage);
  }, []);


 
  const handleDelete=(id)=>{
    setOpen2(true)
    setSelectedUser(id)
  }
  
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


  //   useEffect(()=>{
  //     setData(a.filter((e)=>e.u_id==id));
  // },[]);
  // console.log(data,'setData');

  return (
    
    <div style={{ height: 400, width: '100%',backgroundColor:'lightblue',backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', backgroundAttachment: 'fixed',paddingBottom: '300vh',}}>

<div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around', // Adjust as needed
          }} >

{savedJobs.map((i, index) => (
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

  {/* <IconButton aria-label="Delete" onClick={()=>handleDelete(i.u_id)}><DeleteIcon /></IconButton> */}
              </CardContent>
            </CardActionArea>
            </Card>
         ))}

           

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

</div>

</div>

  );
}  
