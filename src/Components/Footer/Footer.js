import { Stack ,Box, Typography, Link} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';
import footerbg from '../../footer-bg.png'
const styles={
    background: {
        backgroundSize: 'cover',
        backgroundImage: `url(${footerbg})`,
    }
}
const Footer = () => {
    return (
        <Stack style={styles.background}>
            <Stack  width={'80%'} mx='auto' mt={'5rem'}  mb={'5rem'} display={'grid'} sx={{
                gridTemplateColumns:{
                    xs:'1fr',
                    sm:'1fr',
                    md:'1fr',
                    lg:'1fr 1fr 1fr',
                    xl:'1fr 1fr 1fr',
                },
                gap:'20px'
            }}>
            <Stack>
                <Typography  sx={{color:'#d3cdcd'}}variant='h4'>CV BULIDER</Typography>
                <Typography  sx={{color:'#d3cdcd'}} variant='boddy1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus voluptatibus neque illo id repellat quisquam? Autem expedita earum quae laborum ipsum ad.</Typography>
                <Stack display={'flex'} direction={'row'} justifyContent={'center'} mt={'1rem'} spacing={1}>
                    <FacebookIcon sx={{color:'#d3cdcd'}}/>
                    <TwitterIcon sx={{color:'#d3cdcd'}}/>
                    <GoogleIcon sx={{color:'#d3cdcd'}}/>
                    <InstagramIcon sx={{color:'#d3cdcd'}}/>
                    <LinkedInIcon sx={{color:'#d3cdcd'}}/>
                </Stack>
            </Stack>
            <Stack sx={{ display:'flex',direction:'column'}}>
                <Typography sx={{color:'#d3cdcd'}} variant='h5'>PRIVACY & TOS</Typography>

                   <Link
                    component="button"
                    variant="body2"
                    sx={{color:'#d3cdcd'}}
                    >
                    Advertiser Agreement
                    </Link>
                   <Link
                    component="button"
                    variant="body2"
                    sx={{color:'#d3cdcd'}}
                    >
                    Acceptable Use Policy
                    </Link>
                   <Link
                    component="button"
                    variant="body2"
                    sx={{color:'#d3cdcd'}}
                    >
                        Privacy Policy

                    </Link>
                   <Link
                    component="button"
                    variant="body2"
                    sx={{color:'#d3cdcd'}}
                    >Technology Privacy

                    </Link>
                   <Link
                    component="button"
                    variant="body2"
                    sx={{color:'#d3cdcd'}}
                    >Developer Agreement
                    </Link>

            </Stack>
            <Stack >
            <Typography sx={{color:'#d3cdcd'}} variant='h5'>Contuct Us</Typography>
            <Typography sx={{color:'#d3cdcd'}} variant='body1'>Indira Road</Typography>
            <Typography sx={{color:'#d3cdcd'}} variant='body1'> Dhaka,Bangladeh</Typography>
            <Typography sx={{color:'#d3cdcd'}} variant='body1'>+8801679674402</Typography>
            <Typography sx={{color:'#d3cdcd'}} variant='body1'>rijwansaki1@gmail.com</Typography>


            </Stack>
        </Stack>
        </Stack>
    );
};

export default Footer;