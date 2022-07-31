import { Button, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PersonIcon from '@mui/icons-material/Person';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React from 'react';
import backgroundImage from '../../benefits-bg.svg'


const styles = {
    background: {
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${backgroundImage})`
    }
};

const Build = () => {
    return (
    <Box style={styles.background}>
            <Box width={'80%'} mx={'auto'} mt={'2rem'}>
            <Grid container spacing={{ xs: 1, md: 3}} columns={{ xs: 12, sm: 12, md: 12}} alignItems="flex-start">
                <Grid item xs={12} sm={12} md={6}>
                    <Stack mt={'.5rem'} display={'flex'} direction='row'textAlign='initial'  borderRadius={'1rem'}  boxShadow={'0 5px 40px 0 rgb(0 0 0 / 11%)'} padding={'1rem'}
                    > 
                     <Box padding={'1rem'}><ThumbUpOffAltIcon fontSize='large' color='primary'/></Box>     
                        <Typography >
                        Easy Online Resume Builder<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.                  
                        </Typography>
                    </Stack>
                    <Stack>
                    <Stack mt={2} display={'flex'} direction='row'textAlign='initial'
                     borderRadius={'1rem'} boxShadow={'0 5px 40px 0 rgb(0 0 0 / 11%)'} padding={'1rem'}
                    > 
                     <Box padding={'1rem'}><PersonIcon fontSize='large' color='primary'/></Box>     
                        <Typography >
                        Easy Online Resume Builder<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.                  
                        </Typography>
                    </Stack>
                    </Stack>
                    <Stack>
                    <Stack mt={2} mb={5} display={'flex'} direction='row'textAlign='initial'
                     borderRadius={'1rem'} boxShadow={'0 5px 40px 0 rgb(0 0 0 / 11%)'} padding={'1rem'}
                    > 
                     <Box padding={'1rem'}><AddShoppingCartIcon fontSize='large' color='primary'/></Box>     
                        <Typography >
                        Easy Online Resume Builder<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda.                  
                        </Typography>
                    </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={6} mt={'0rem'}>
                    <Stack>
                        <Typography 
                         variant='h4'
                         textAlign='initial'
                        >
                        Why Choose Our Platform?
                        </Typography>
                        <Typography
                        textAlign='initial'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magni, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. Fugit!
                        </Typography>
                    </Stack>
                    <Stack display={'flex'} direction={'row'} width={'fit-content'} spacing={1}mt={'2rem'} mb={'2rem'} textAlign='initial'>  
                        <Button variant='contained' color='info'>LETS BUILD YOUR CV</Button>
                    </Stack>
                
                </Grid>
            </Grid>
        </Box>
    </Box>
    );
};

export default Build;