import { Box, Grid, Stack, Typography } from '@mui/material';
import cv from '../../cv.png'
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import React from 'react';
const styles = {
    font: {
        fontSize:'1rem',
        fontWeight: '900',
        fontFamily: 'sans-serif',
        color:'#0e85ee'
    }
};

const DeliverInfo = () => {
    return (
        <Box>
             <Grid width={'80%'} ml={'auto'} mt={'2rem'}>
                <Grid container spacing={{ xs: 1, md:0}} columns={{ xs: 12, sm: 12, md: 12}} alignItems="flex-start">
                    <Grid  item xs={12} sm={12} md={4} mt={'5rem'}>
                        <Stack textAlign={'initial'} spacing={2} >
                            <Typography variant='h4'>We Deliver The Best</Typography>
                            <Typography style={styles.font}><FileDownloadDoneIcon color='success'/>Proven CV Templates to increase Hiring Chance</Typography>
                            <Typography style={styles.font}><FileDownloadDoneIcon color='success'/>Creative and Clean Templates Design</Typography>
                            <Typography style={styles.font}><FileDownloadDoneIcon color='success'/>Easy and Intuitive Online CV Builder</Typography>
                            <Typography style={styles.font}><FileDownloadDoneIcon color='success'/>Free to use. Developed by hiring professionals.</Typography>
                            <Typography style={styles.font}><FileDownloadDoneIcon color='success'/>Fast Easy CV and Resume Formatting</Typography>
                            <Typography style={styles.font}><FileDownloadDoneIcon color='success'/>Recruiter Approved Phrases.</Typography>
                        </Stack>
                    </Grid>
                    <Grid  item xs={12} sm={12} md={5}>
                        <Stack><img width={'100%'}  src={cv} alt="" srcset="" /></Stack>
                    </Grid>
                </Grid>
             </Grid>
        </Box>
    );
};

export default DeliverInfo;



