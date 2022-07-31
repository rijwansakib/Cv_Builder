import { Box, Button, Grid,Stack, Typography } from '@mui/material';
import React from 'react';
import banner from '../../banner.png';
const HeroSection = () => {

    return (
        <Box width={'80%'} mx={'auto'} mt={'4rem'}>
        <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 12, sm: 12, md: 12}} alignItems="center">
            <Grid item xs={12} sm={12} md={6}>
              <Stack>
                <Typography variant='h3' textAlign={'center'}>Online CV Builder With Creative Templates.</Typography>
                <Typography variant='h6'>Our Perfect resume builder takes the hassle out of resume writing. Choose from several templates and follow easy prompts to create the perfect job-ready resume.</Typography>
              </Stack>
              <Stack display={'flex'} direction={'row'} width={'fit-content'} spacing={1} mx={'auto'}>
                <Button  variant='contained' color='info'>LOGIN</Button>
                <Button variant='contained' color='info'>SIGNIN</Button>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <img width={'100%'} src={banner} alt="" srcset="" />
            </Grid>
        </Grid>
      </Box>
    );
};

export default HeroSection;