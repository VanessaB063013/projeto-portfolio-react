import React from "react";
import './Home.css';
import { Grid , Typography, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { url } from "inspector";


function Home() {
    return (


        <>
            <Grid container xs={12} className="bg-home grid-container">

                <Grid item xs={6}>
                <Box className="box-robo">
                       <img src = "https://i.imgur.com/4foPAat.png" className="img-robo imagem"/>
                    </Box>
                    



                </Grid>

                <Grid xs={6}>

                <Box className="txt-home " >
                      <Typography variant="h3" component="h3" > 
                      Vanessa Basilio. </Typography>
                      <Typography variant ="h6" component="h6">Desenvolvedora full stack.</Typography>
                    </Box>
                        <Box className="position-box-button-home">
                            <Button variant="outlined" className='button span i color-font-button'> my projects</Button>
                        </Box>

                </Grid>




            </Grid>


        </>
    );

}

export default Home;