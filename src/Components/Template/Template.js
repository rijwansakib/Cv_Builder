import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import React from 'react';
import tembg from '../../tembg.png'
import demo1 from '../../demo-1.png'
import demo2 from '../../demo-2.png'
import demo3 from '../../demo-3.png'

const styles = {
    background: {
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${tembg})`
    },

    dot:{
      width: 8,
      height: 8,
      borderRadius:'50%',
    },
};


const Template = () => {
    return (
      
    <Stack mt={3} style={styles.background}>
          
          <Stack direction={'row'}  justifyContent={'center'} spacing={1} padding={'3rem'}>
                <Box style={styles.dot} sx={{ backgroundColor: 'primary.light'}} ></Box>
                <Box style={styles.dot} sx={{ backgroundColor: 'secondary.dark'}} ></Box>
                <Box style={styles.dot} sx={{ backgroundColor: 'error.dark'}} ></Box>
                <Box style={styles.dot} sx={{ backgroundColor: 'warning.dark'}} ></Box>
                <Box style={styles.dot} sx={{ backgroundColor: 'info.dark'}} ></Box>
                <Box style={styles.dot} sx={{ backgroundColor: 'success.dark'}} ></Box>
              </Stack>


            <Stack>
                <Typography variant={'h4'}>Our Creative Templates</Typography>
                <Typography variant={'h6'} sx={{fontSize:'16px',width:{
                  xs:'fit-content',
                  sm:'fit-content',
                  md:'fit-content',
                  lg:'600px',
                  xl:'800px'
                },margin:'0 auto'}} >orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
            </Stack> 


            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                  <Grid container justifyContent="center" spacing={2}>
                    
                      <Grid item mt={'2rem'} width={'80%'} display='flex' 
                      sx={{
                        flexDirection:{
                          xs:'column',
                          sm:'column',
                          md:'column',
                          lg:'row',
                          xl:'row',
                        }
                      }}>
                        <Paper >
                          <img src={demo1} width={'100%'} alt="" srcset="" />
                          <Stack display={'flex'} sx={{
                                  flexDirection:{
                                    xs:'column',
                                    sm:'column',
                                    md:'column',
                                    lg:'row',
                                    xl:'row',
                                  }
                      }} width={'fit-content'} mx={'auto'} gap={'10px'} mt={'2rem'} mb={'2rem'} textAlign='initial'>  
                            <Button variant='contained' color='info'>LETS BUILD YOUR CV</Button>
                            <Button variant='contained' color='info'>LETS BUILD YOUR CV</Button>      
                          </Stack>
                        </Paper>
                        <Paper >
                          <img src={demo2} width={'100%'} alt="" srcset="" />
                          <Stack display={'flex'} sx={{
                        flexDirection:{
                          xs:'column',
                          sm:'column',
                          md:'column',
                          lg:'row',
                          xl:'row',
                        }
                      }} width={'fit-content'} mx={'auto'} gap={'10px'} mt={'2rem'} mb={'2rem'} textAlign='initial'>  
                            <Button variant='contained' color='info'>LETS BUILD YOUR CV</Button>
                            <Button variant='contained' color='info'>LETS BUILD YOUR CV</Button>      
                          </Stack>
                        </Paper>
                        <Paper >
                          <img src={demo3} width={'100%'} alt="" srcset="" />

                          <Stack display={'flex'} sx={{
                        flexDirection:{
                          xs:'column',
                          sm:'column',
                          md:'column',
                          lg:'row',
                          xl:'row',
                        },
                        
                      }} width={'fit-content'} mx={'auto'}gap={'10px'} mt={'2rem'} mb={'2rem'} textAlign='initial'>  
                            <Button  variant='contained' color='info'>LETS BUILD YOUR CV</Button>
                            <Button  variant='contained' color='info'>LETS BUILD YOUR CV</Button>      
                          </Stack>
                        </Paper>
                      </Grid>
                  </Grid>
                </Grid>
            </Grid>

            
                  
    </Stack>
    );
};

export default Template;
