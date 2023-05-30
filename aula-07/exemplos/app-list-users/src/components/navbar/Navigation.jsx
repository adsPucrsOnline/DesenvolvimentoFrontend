import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const DrawerContainer = styled('div')({
    width: 250,
  });

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          App List
        </Typography>
        <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
          <DrawerContainer>
            <List>
              <ListItem button onClick={handleDrawerClose} component={Link} to="/">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button onClick={handleDrawerClose}  component={Link} to="/usuario"> 
                <ListItemText primary="Lista de Usuários" />
              </ListItem>
            </List>
          </DrawerContainer>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
