import { Grid } from '@mui/material';
import React from 'react';
import Particle from '../Component/Particle';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Projects = () => {
    return (
        <div>
           <Particle></Particle>
           <Grid sx={{color:'white', marginTop:'50px'}} container spacing={1}>
  <Grid style={{display:'flex',justifyContent: 'center'}} item xs={12} md={4} lg={4}>
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="240"
        image="https://i.ibb.co/L914vkx/fullbrightone.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Carhub
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Technology Used here is React, Node,Vercel, Netlify, Firebase, Express , React-Router, React-query etc.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className='buttonlive'><a href="https://resilient-flan-be118a.netlify.app/">Live Site</a></Button>
        <Button size="small" sx={{fontWeight:600,fontFamily:'serif', color:'black'}} disabled> More About it.</Button>
      </CardActions>
    </Card>
  </Grid>
  
  <Grid style={{display:'flex',justifyContent: 'center'}} item xs={12} md={4} lg={4}>
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="240"
        image="https://i.ibb.co/WzFXSyV/websitenumberthree.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          CryptoData
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Technology Used here is React, Node,Vercel, Netlify, Firebase, Express ,Api, Firestore, React-Router, React-query etc.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className='buttonlive'><a href="https://gorgeous-mousse-a2b20a.netlify.app">Live Site</a></Button>
        <Button size="small" sx={{fontWeight:600,fontFamily:'serif', color:'black'}} disabled> More About it.</Button>
      </CardActions>
    </Card>
  </Grid>
  
  <Grid style={{display:'flex',justifyContent: 'center'}} item xs={12} md={4} lg={4}>
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="240"
        image="https://i.ibb.co/vjW5Y7G/websitenumbertwo.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          MovieTrailer
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Technology Used here is React, Imbdb, Netlify, Firebase, Express , React-Router, axios, api intregation etc.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className='buttonlive'><a href="https://peppy-twilight-83cf37.netlify.app">Live Site</a></Button>
        <Button size="small" sx={{fontWeight:600,fontFamily:'serif', color:'black'}} disabled> More About it.</Button>
      </CardActions>
    </Card>
  </Grid>
  
  <Grid style={{display:'flex',justifyContent: 'center'}} item xs={12} md={4} lg={4}>
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="240"
        image="https://i.ibb.co/r5xngQn/mapproojects.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Travelworldwide
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Technology Used here is React, Imbdb,React leaflet,OpenMapapi, weatherApi, Netlify,  axios, api intregation etc.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className='buttonlive'><a href="https://mapproject-beignet-e40944.netlify.app/">Live Site</a></Button>
        <Button size="small" sx={{fontWeight:600,fontFamily:'serif', color:'black'}} disabled> More About it.</Button>
      </CardActions>
    </Card>
  </Grid>
  
 
</Grid>
        </div>
    );
};

export default Projects;