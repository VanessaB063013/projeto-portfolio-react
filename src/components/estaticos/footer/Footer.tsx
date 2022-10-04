import React from 'react';
import "./Footer.css"


import { Typography,Grid } from '@material-ui/core';
import {Box} from '@mui/material';
function Footer(){

    return(
        
        <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            
            <Box style={{ backgroundColor: " #000"}}>
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