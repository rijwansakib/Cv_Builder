import { AppBar, Box, Button, Container, IconButton, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DiamondIcon from '@mui/icons-material/Diamond';
import { useState } from 'react';


const NavAppBar = () => {
    const [item, setItem] =useState(null);
  
    const handleOpenUserMenu = (event) => {
        setItem(event.currentTarget);
    };
  
    const handleCloseUserMenu = () => {
        setItem(null);
    };

    const navItems = ['HOME', 'ABOUT','TEMPLATES','CONTACT',];
    return (
        <AppBar position='static' sx={{backgroundColor:'transparent'}}>
            <Container>
                <Toolbar sx={{justifyContent:'space-around',}}>
                    {/*logo part*/}
                        <Typography 
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                          mr: 2,
                          display: { xs: 'none', md: 'flex' },
                          fontFamily: 'monospace',
                          fontWeight: 900,
                          letterSpacing: '.3rem',
                          color: 'warning',
                          textDecoration: 'none',
                        }}
                        >
                     <DiamondIcon  sx={{ display: { xs: 'none', md: 'flex'}, mr: 1 }}/>
                     
                        LOGO
                        </Typography>
 

                        {/* Responsive MENU Part */}

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                             size="large"
                             aria-label="account of current user"
                             aria-controls="menu-appbar"
                             aria-haspopup="true"
                             color="info"
                             onClick={handleOpenUserMenu}
                            >
                                <MenuIcon/>
                            </IconButton>
                            {/* onClick={handleCloseNavMenu} */}
                            <List>
                            <Menu
                            open={Boolean(item)}
                            onClose={handleCloseUserMenu}
                            
                            >
                                {navItems.map((item) => (
                                    <MenuItem key={item} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{item}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                            <Stack spacing={1} direction='row' sx={{width:'10%',height:'2rem',textAlign: 'center',ml:'1rem'}}>
                            <Button variant='contained' color='info'>LOGIN</Button>
                            <Button variant='contained'>SIGNIN</Button>
                        </Stack>
                            </List>
                        
                        </Box>

                        {/* List of item*/}
                        <List 
                        sx={{display:
                            { xs: 'none', md: 'flex',lg:'flex',xl:'flex' 
                            },
                            color:'black'
                        }} 
                            >
                                {navItems.map((item) => (
                                <ListItem key={item} disablePadding >
                                    <ListItemButton  sx={{ textAlign: 'center' }}>
                                    <ListItemText primary={item} />
                                    </ListItemButton>
                                </ListItem>
                                ))}

                               <Stack spacing={3} direction='row' sx={{height:'2rem',mt:'0.5rem'}}>
                                    <Button variant='contained' color='info' >LOGIN</Button>
                                    <Button variant='contained' color='info'>SIGNIN</Button>
                               </Stack>
                       

                        </List>

                    
                </Toolbar>
            </Container>
        </AppBar>

    );
};

export default NavAppBar;