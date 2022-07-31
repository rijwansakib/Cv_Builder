import { Box,Card,CardActionArea,CardContent,CardMedia,Grid,Stack, Typography } from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import React from 'react';

const styles = {
    dot:{
      width: '8px',
      height: '8px',
      borderRadius:'50%',
    },
    gridContainer:{
      padding: '10px',
      gap: '50px',
    },
    icon:{
      marginTop:'10px'
    },
    svg:{
      fontSize: '4rem',
    }

};

const Feature = () => {
    return (
      <Stack width={'80%'} mx={'auto'} sx={{ flexGrow: 1 }}>


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


            <Grid display={'grid'} sx={{
              gridTemplateColumns:{
                xs:'1fr',
                md:'1fr 1fr',
                lg:'1fr 1fr 1fr',
              } 
            }} style={styles.gridContainer}>
                    
                      <Card >
                          <CardActionArea>
                            <CardMedia style={styles.icon}> <DesignServicesIcon style={styles.svg} color={'warning'}/></CardMedia>
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                              Proven CV Templates to increase Hiring Chance
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      <Card>
                          <CardActionArea>
                            <CardMedia style={styles.icon}> <SettingsApplicationsIcon style={styles.svg} color={'primary'} fontSize={'large'}/></CardMedia>
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                              Creative, Modern and Clean Templates Design
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      <Card>
                          <CardActionArea>
                            <CardMedia style={styles.icon}> <DesignServicesIcon style={styles.svg} color={'error'} fontSize={'large'}/></CardMedia>
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                              Easy and Intuitive Online CV and Resume Builder
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      <Card>
                          <CardActionArea>
                            <CardMedia style={styles.icon}> <DesignServicesIcon style={styles.svg} color={'success'} fontSize={'large'}/></CardMedia>
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                              Free to use. Developed by hiring professionals.
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      <Card>
                          <CardActionArea>
                            <CardMedia style={styles.icon}> <DesignServicesIcon style={styles.svg} color={'warning'} fontSize={'large'}/></CardMedia>
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                              Recruiter Approved Phrases with Module Notification
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      <Card>
                          <CardActionArea>
                            <CardMedia style={styles.icon}> <DesignServicesIcon style={styles.svg} color={'primary'} fontSize={'large'}/></CardMedia>
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                              Fast Easy CV and Resume Formatting 
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>

            </Grid>


      </Stack>
    );
};

export default Feature;