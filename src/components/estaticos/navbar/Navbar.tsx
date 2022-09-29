import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';


function Navbar(){
    return(
        <>
         <AppBar position="static" className='cor'>
        
        <Toolbar>

            <Box style={{ marginRight: "50%", color: "black" }}  >
                <Typography variant="h5" >
                    Portfolio

                </Typography>
            </Box>
            <Link to='/home' className='text-decorator-none' >
                <Box>
                    <Typography variant="h6" color="inherit" className='menu' style={{ cursor: "pointer", color: "black" }}>
                        home
                    </Typography>
                </Box>
            </Link>
        
            



    </Toolbar>
</AppBar>
        </>
    );
}
export default Navbar;