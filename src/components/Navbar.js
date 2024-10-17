// src/components/Navbar.js
import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    Container,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme,
    Typography,
} from '@mui/material';
import {
    Menu as MenuIcon,
    Home as HomeIcon,
    Info as InfoIcon,
    School as SchoolIcon,
    LocalLibrary as LocalLibraryIcon,
    ContactMail as ContactMailIcon,
} from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#F26A2A',
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
    '&:hover': {
        backgroundColor: '#2DB8B0',
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
    color: 'white',
}));

const ActiveButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
    backgroundColor: '#2DB8B0',
    color: 'white',
    '&:hover': {
        backgroundColor: '#1A8A8B',
    },
}));

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const navItems = [
        { label: 'Home', icon: <HomeIcon />, link: '/' },
        { label: 'About', icon: <InfoIcon />, link: '/about' },
        { label: 'Programs', icon: <SchoolIcon />, link: '/programs' },
        { label: 'Admissions', icon: <LocalLibraryIcon />, link: '/admissions' },
        { label: 'Contact', icon: <ContactMailIcon />, link: '/contact' },
        { label: 'Enroll', icon: <ContactMailIcon />, link: '/enroll' },
    ];

    const renderNavItem = (item) => (
        <StyledListItem button component={NavLink} to={item.link} key={item.label} activeStyle={{ backgroundColor: '#2DB8B0' }}>
            <ListItemIcon style={{ color: 'white' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} style={{ color: 'white' }} />
        </StyledListItem>
    );

    return (
        <>
            <StyledAppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1, color: 'white' }}>
                        Kinderbots Pre-School
                    </Typography>
                    {isMobile ? (
                        <>
                            <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)} sx={{ '& .MuiDrawer-paper': { backgroundColor: '#F26A2A', color: 'white' } }}>
                                <List>
                                    {navItems.map(renderNavItem)}
                                </List>
                            </Drawer>
                        </>
                    ) : (
                        navItems.map((item) => (
                            <NavLink to={item.link} style={{ textDecoration: 'none' }} key={item.label}>
                                {({ isActive }) => (isActive ? (
                                    <ActiveButton>{item.label}</ActiveButton>
                                ) : (
                                    <StyledButton>{item.label}</StyledButton>
                                ))}
                            </NavLink>
                        ))
                    )}
                </Toolbar>
            </StyledAppBar>
        </>
    );
};

export default Navbar;
