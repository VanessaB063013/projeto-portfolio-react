import React from 'react';
import "./Footer.css"

import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography,Grid } from '@material-ui/core';
import {Box} from '@mui/material';
function Footer(){

    return(
        
        <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box style={{ backgroundColor: "#230b0f ", height: "120px" }}>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom style={{ color: "#ffff" }}> Follow me </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://github.com/VanessaB063013/" target="_blank">
                        <GitHubIcon style={{ fontSize: 60, color: "#ffff" }} />
                    </a>
                    <a href="https://www.facebook.com/vanessa.basiliojardim" target="_blank">
                        <FacebookIcon style={{ fontSize: 60, color: "#ffff" }} />
                    </a>
                    <a href="https://www.linkedin.com/in/vanessa-basilio-/" target="_blank">
                        <LinkedInIcon style={{ fontSize: 60, color: "#ffff" }} />
                    </a>
                </Box>
            </Box>
            <Box style={{ backgroundColor: " #321015"}}>
                <Box paddingTop={1} >
                    <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "#ffff" }} >© 2022 Copyright:</Typography>
                </Box>
                <Box>
                
                        <Typography variant="subtitle2" gutterBottom style={{ color: "#ffff" }} align="center">Vanessa Basilio</Typography>
                    
                </Box>
            </Box>
        </Grid>
    </Grid>

       
    );
}
export default Footer;