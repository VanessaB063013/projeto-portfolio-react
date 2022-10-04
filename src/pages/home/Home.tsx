import React from "react";
import './Home.css';
import { Grid , Typography } from '@material-ui/core';
import { Box } from '@mui/material';



function Home(){
    return (


        <>
            <Grid container xs={12} className="bg-home grid-container">

                

                <Box className="txt-home " >
                      <Typography variant="h3" component="h3" > 
                      Vanessa Basilio. </Typography>
                      <Typography variant ="h6" component="h6">Full Stack developer.</Typography>
                    </Box>

          
                        

                




            </Grid>
            


        </>
    );

}

export default Home;