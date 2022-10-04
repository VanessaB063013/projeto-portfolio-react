import React from 'react';
import './Sobre.css';
import { Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';

function Sobre() {
    return (
        <>

            <Grid container xs={12} className='bg-sobre'>


                <Grid item xs={6} >
                    <Box className='position-img-perfil'>
                        <img src="https://i.imgur.com/U3Ac7Lo.jpg" className="img-perfil-sobre" />

                    </Box>


                </Grid>

                <Grid item xs={6}>
                    <Box >
                        <Typography className='txt-sobre alinhamento-txt-home'>
                            Graduanda em análise e desenvolvimento de sistemas pela Universidade São Judas
                            Tadeu, período noturno, campus Paulista. Possuo certificado em desenvolvimento
                            Web Java pela Generation Brasil. Tenho conhecimento em linguagem Java, Spring
                            Boot, JUnit, Postman, Git, modelagem de software, banco de dados relacional
                            MySQL, HTML, CSS, React e tenho facilidade em trabalhar com metodologias ágeis.
                            Busco aprimorar minhas habilidades técnicas desenvolvendo projetos com foco em
                            Web, trabalhando tanto com front- end quanto com back-end. Prezo o trabalho em
                            equipe e boa comunicação entre os membros e tenho imensa satisfação em agregar
                            valor à empresa expressando ideias e contribuindo com soluções.
                        </Typography>
                    </Box>


                </Grid>



            </Grid>


        </>
    );
}
export default Sobre;