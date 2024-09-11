import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function firstpage() {
  return (
    <div style={{
      height: 400, width: '100%', backgroundImage: `url('https://img.freepik.com/free-photo/portrait-thinking-girl-with-blond-hair-gathered-bun-wearing-yellow-sweater-glasses-touching-her-chin-thoughtfully-watching-left-copy-space-isolated-white-wall_295783-13388.jpg?w=740&t=st=1693327150~exp=1693327750~hmac=40f9ba0d8ec3418a2dde54cf8d1a3521113c0fa284fb9b4e579f91f52f9f3ed7')`, backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh', backgroundAttachment: 'fixed', paddingBottom: '100vh',
      padding:'50px'
    }}>
{/* , justifyContent: 'center' ,gap:'20px' */}
      <div style={{ display: 'flex',gap:'20px'}}>
        <Grid item><Card sx={{ maxWidth: 345, maxHeight: 545,boxShadow:'100px' }} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image="https://icon-library.com/images/admin-user-icon/admin-user-icon-18.jpg"

            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div" style={{ marginTop: '30px' }}>
                <b> ADMIN</b>
              </Typography>
              <Link to={'/demo'}>
                <Button variant="contained" style={{ marginTop: '50px', width: '200px', height: '110px' }}>CLICK HERE TO VIEW ADMIN PAGE</Button>
              </Link>
            </CardContent>
          </CardActionArea></Card>
        </Grid>



        <Grid item >
          <Card sx={{ maxWidth: 345, maxHeight: 545 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6yzN0XDx7iPRx-u7u6fDjBZIh1JUmIKbFfQ&usqp=CAU"

              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div" style={{ marginTop: '30px' }}>
                  <b>USER</b>
                </Typography>
                <Link to={'/Udemo'}>
                  <Button variant="contained" style={{ marginTop: '50px', width: '200px', height: '110px' }}>CLICK HERE TO VIEW USER PAGE</Button>
                </Link>
              </CardContent>
            </CardActionArea>
          </Card> </Grid>
      </div>
    </div>
  );
}