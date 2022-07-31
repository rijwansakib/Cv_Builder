import { Button, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import reqImg from '../../reqestpartImg.png'
import React from 'react';

const RequestSection = () => {
    return (
        <Box>
            <Grid borderRadius={'1rem'} boxShadow={'0 5px 40px 0 rgb(0 0 0 / 11%)'} width={'80%'} mx={'auto'} mb={'5rem'}   mt={'5rem'} sx={{display:{
                md:'flex',
                lg:'flex',
                xl:'flex'
            }}}>
                <Grid sx={{display:{
                xs:'none',
                md:'flex',
                lg:'flex',
                xl:'flex'
            }}}>
                    <img src={reqImg} alt="" srcset="" />
                </Grid>
                <Stack sx={{justifyContent:'end'}}>
                    <Grid  >
                        <Typography  variant='h4'>Do you Need a Complete Custom CV Template?</Typography>
                    
                    </Grid>
                    <Grid mx={'auto'}>
                        <Stack  width={'max-content'} mt= {'2rem'} mb={'2rem'} alignItem='center'>  
                            <Button variant='outlined' color='info' fontSize={'900'}>Send a Request</Button>
                        </Stack>
                    </Grid>
                </Stack>

            </Grid>
        </Box>
    );
};

export default RequestSection;