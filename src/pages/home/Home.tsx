import React from "react";
import './Home.css';
import { Grid , Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { url } from "inspector";


function Home() {
    return (


        <>
            <Grid container xs={12} className="bg-home">

                <Grid item xs={6}>
                <Box className="box-robo">
                       <img src = "https://i.imgur.com/3cTVBHl.png" className="img-robo"/>
                    </Box>
                    



                </Grid>

                <Grid xs={6}>

                <Box className="txt-home" >
                      <Typography variant="h3" component="h3" > Olá, eu sou Vanessa Basilio. </Typography>
                      <Typography variant ="h5" component="h5">Desenvolvedora full stack.</Typography>
                    </Box>
                </Grid>




            </Grid>


        </>
    );

}

export default Home;