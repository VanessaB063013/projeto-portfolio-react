import React from 'react';
import './Navbar.css';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';




function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar style={{ display: "flex" }}>

                    <Box className="margem alinhamento">
                        <img src="https://i.imgur.com/k6jDg8B.png" className="img-logo-nav"/>
                    </Box>
                    



                    <Link to='/home' className='text-decorator-none'>
                        <Box className="name-portfolio">
                            <Typography variant="h6" color="inherit" className='menu' style={{ cursor: "pointer" }}>
                                home
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/about' className='text-decorator-none'>
                        <Box>
                            <Typography variant="h6" color="inherit" className='menu' style={{ cursor: "pointer" }}>
                                about me
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/technology' className='text-decorator-none'>
                        <Box>
                            <Typography variant="h6" color="inherit" className='menu' style={{ cursor: "pointer" }}>
                                technologies
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/feedback' className='text-decorator-none'>
                        <Box>
                            <Typography variant="h6" color="inherit" className='menu' style={{ cursor: "pointer" }}>
                                feedbacks
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/projects' className='text-decorator-none'>
                        <Box>
                            <Typography variant="h6" color="inherit" className='menu' style={{ cursor: "pointer" }}>
                                projects
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/contact' className='text-decorator-none'>
                        <Box>
                            <Typography variant="h6" color="inherit" className='menu' style={{ cursor: "pointer" }}>
                                contact me
                            </Typography>
                        </Box>
                    </Link>




                </Toolbar>
            </AppBar>
        </>
    );
}
export default Navbar;