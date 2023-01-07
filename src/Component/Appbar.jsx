import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
// import { Link } from '@mui/material';

const Appbar = () => {
  const blog=false
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar color='transparent' position="static">
        <Toolbar className='haedbak'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Link className="link" to="/">
          <Button color="inherit">Home</Button>
          </Link>
          <Link className="link" to="/projects">
          <Button color="inherit">Projects</Button>
          </Link>
          
          {
            blog?<Link className="link" to="/blogs">
            <Button color="inherit">Blogs</Button>
            </Link>:<></>
          }
          
          <Link className="link" to="/contact">
          <Button color="inherit">Contact</Button>
          </Link>
          
          {/* <Button color="inherit">Blog</Button>
          <Button color="inherit">Contact</Button> */}
          {/* <a href="https://drive.google.com/file/d/12Acj0cBaGEoUYLtOriOkpWSc-qNzJgjR/view"> click</a> */}
          <Button className='resume' color='inherit'> <a href="https://drive.google.com/file/d/12Acj0cBaGEoUYLtOriOkpWSc-qNzJgjR/view">Resume</a></Button> 


           {/* <Button color="inherit">Resume</Button>
          <Button color="inherit">Resume</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    );
};

export default Appbar;