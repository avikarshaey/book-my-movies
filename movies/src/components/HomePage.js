import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import MovieItem from './Movies/MovieItem';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
    <Box width={"100%"} height="100%" margin="auto" marginTop={2} >
        <Box margin={"auto"} width="80%" height={"40vh"} padding={2} >
        <img src='https://timesofindia.indiatimes.com/photo/msid-107136794,imgsize-144485.cms' alt='Shaitaan' width={"100%"} height={"100%"} ></img>
        </Box>
        <Box padding={5} margin="auto">
            <Typography variant='h4' textAlign={"center"}>Latest Releases</Typography>
        </Box>
            <Box 
                margin={"auto"}
                display="flex"
                width="80%"
                justifyContent={"center"}
                alignItems="center"
                flexWrap="wrap"
                >
                    {[1, 2, 3, 4].map((item) => (
                        <MovieItem key={item} />
                    ))}
            </Box>
            <Box display="flex" padding={5} margin="auto" >
                <Button LinkComponent={Link} to ="/movies"  variant='outlined' sx={{margin:"auto",color:"#2b2d42"}} > View All Movies
                 </Button>
            </Box>
    </Box>
    );
};

export default HomePage