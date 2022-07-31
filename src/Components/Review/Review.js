import { Box,Card,CardActionArea,CardContent,CardMedia,Grid,Stack, Typography } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import React from 'react';
import users from '../../3.jpg'

const styles = {
    dot:{
      width: '8px',
      height: '8px',
      borderRadius:'50%',
    },
    gridContainer:{
      padding: '10px',
      gap: '10px',
    },
    icon:{
      marginTop:'10px',
      position:'reletrive',
    },
    svg:{
      fontSize: '4rem',
      position:'absolute',
      margin: '-18px',
      marginLeft: '-70'

    },
    img:{
        width:'50%',
        borderRadius:'50%',
    }

};

const Review = () => {
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
                <Typography variant={'h4'}>Your Success, Our Inspiration</Typography>
                <Typography variant={'h6'} sx={{fontSize:'16px',width:{
                  xs:'fit-content',
                  sm:'fit-content',
                  md:'fit-content',
                  lg:'600px',
                  xl:'800px'
                },margin:'0 auto'}} >lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
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
                            <CardMedia  style={styles.icon}> <FormatQuoteIcon style={styles.svg} color={'warning'}/> <img src={users} style={styles.img} alt="" srcset="" /></CardMedia>
                            <CardContent>
                              <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                              </Typography>
                              <Typography gutterBottom variant="h5" component="div">
                              Proven CV
                              </Typography>
                              <Typography gutterBottom variant="h6" component="div">
                              one of our Client
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      <Card >
                          <CardActionArea>
                            <CardMedia  style={styles.icon}> <FormatQuoteIcon style={styles.svg} color={'warning'}/> <img src={users} style={styles.img} alt="" srcset="" /></CardMedia>
                            <CardContent>
                              <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                              </Typography>
                              <Typography gutterBottom variant="h5" component="div">
                              Proven CV
                              </Typography>
                              <Typography gutterBottom variant="h6" component="div">
                              one of our Client
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      <Card >
                          <CardActionArea>
                            <CardMedia  style={styles.icon}> <FormatQuoteIcon style={styles.svg} color={'warning'}/> <img src={users} style={styles.img} alt="" srcset="" /></CardMedia>
                            <CardContent>
                              <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                              </Typography>
                              <Typography gutterBottom variant="h5" component="div">
                              Proven CV
                              </Typography>
                              <Typography gutterBottom variant="h6" component="div">
                              one of our Client
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>

            </Grid>


      </Stack>
    );
};

export default Review;