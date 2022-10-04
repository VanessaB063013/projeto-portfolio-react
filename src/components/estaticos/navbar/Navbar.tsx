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

                    <Box className="margem alinhamento ">
                        <img src="https://i.imgur.com/Qb47bX3.png" className="img-logo-nav margem-img"/>
                    </Box>
                    



                    <Link to='/home' className='text-decorator-none'>
                        <Box className="name-portfolio">
                            <Typography variant="h6" color="inherit" className='menu' style={{ cursor: "pointer" }}>
                                home
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/sobre' className='text-decorator-none'>
                        <Box>
                            <Typography variant="h6" color="inherit" className='menu' style={{ cursor: "pointer" }}>
                                sobre
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/tecnologias' className='text-decorator-none'>
                        <Box>
                            <Typography variant="h6" color="inherit" className='menu' style={{ cursor: "pointer" }}>
                                tecnologias
                            </Typography>
                        </Box>
                    </Link>


                    <Link to='/projetos' className='text-decorator-none'>
                        <Box>
                            <Typography variant="h6" color="inherit" className='menu' style={{ cursor: "pointer" }}>
                                projetos
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/contatos' className='text-decorator-none'>
                        <Box>
                            <Typography variant="h6" color="inherit" className='menu' style={{ cursor: "pointer" }}>
                                contatos
                            </Typography>
                        </Box>
                    </Link>




                </Toolbar>
            </AppBar>
        </>
    );
}
export default Navbar;