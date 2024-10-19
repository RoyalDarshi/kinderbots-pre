import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme,
    Typography
} from '@mui/material';
import {
    Menu as MenuIcon,
    Home as HomeIcon,
    Info as InfoIcon,
    School as SchoolIcon,
    LocalLibrary as LocalLibraryIcon,
    ContactMail as ContactMailIcon
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: '#ff5e78 !important', // Vibrant primary color
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06) !important',
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
    '&:hover': {
        backgroundColor: '#6be3ff !important', // Hover color
        transform: 'scale(1.05) !important',
        transition: 'transform 0.3s ease-in-out',
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
    color: 'white !important',
    backgroundColor: '#ff5e78 !important',
    borderRadius: '20px !important', // Rounded corners
    padding: `${theme.spacing(1, 3)} !important`, // More padding
    transition: 'background-color 0.3s ease, transform 0.3s ease !important',
    '&:hover': {
        backgroundColor: '#6be3ff !important', // Button hover color
        transform: 'scale(1.05) !important',
    },
}));

const ActiveButton = styled(StyledButton)(({ theme }) => ({
    backgroundColor: '#6be3ff !important', // Active button color
    '&:hover': {
        backgroundColor: '#1E8C7C !important',
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

    const handleNavItemClick = (link) => {
        setDrawerOpen(false); // Close the drawer when an item is clicked
    };

    const renderNavItem = (item) => (
        <StyledListItem
            button
            component={NavLink}
            to={item.link}
            key={item.label}
            onClick={() => handleNavItemClick(item.link)} // Close drawer on click
        >
            <ListItemIcon style={{ color: 'white' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} style={{ color: 'white !important' }} />
        </StyledListItem>
    );

    return (
        <>
            <StyledAppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1, color: 'white !important' }}>
                        Kinderbots Pre-School
                    </Typography>
                    {isMobile ? (
                        <>
                            <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                anchor="left"
                                open={drawerOpen}
                                onClose={toggleDrawer(false)}
                                sx={{
                                    '& .MuiDrawer-paper': {
                                        backgroundColor: '#ff5e78 !important',
                                        color: 'white !important',
                                    },
                                }}
                            >
                                <List>
                                    {navItems.map(renderNavItem)}
                                </List>
                            </Drawer>
                        </>
                    ) : (
                        navItems.map((item) => (
                            <NavLink to={item.link} style={{ textDecoration: 'none' }} key={item.label}>
                                {({ isActive }) => (
                                    isActive ? (
                                        <ActiveButton>{item.label}</ActiveButton>
                                    ) : (
                                        <StyledButton>{item.label}</StyledButton>
                                    )
                                )}
                            </NavLink>
                        ))
                    )}
                </Toolbar>
            </StyledAppBar>
        </>
    );
};

export default Navbar;
