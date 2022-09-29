import React from "react";
import './Home.css';
import { Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import { url } from "inspector";


function Home() {
    return (


        <>
            <Grid container xs={12} className="bg-home">

                <Grid item xs={6}>
                    <Box >
                      <h1>Home</h1>
                    </Box>



                </Grid>

                <Grid xs={6}>

                    <Box>
                        <h1>home</h1>
                    </Box>
                </Grid>




            </Grid>


        </>
    );

}

export default Home;