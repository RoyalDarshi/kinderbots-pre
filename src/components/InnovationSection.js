// src/components/AboutComponents/InnovationSection.js
import React from 'react';
import { Paper, Typography, List, ListItem, ListItemIcon } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ToysIcon from '@mui/icons-material/Toys';
import ScienceIcon from '@mui/icons-material/Science';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BuildIcon from '@mui/icons-material/Build';

// Define styles
const useStyles = makeStyles((theme) => ({
    innovationSection: {
        padding: '50px !important',   // Generous padding for spacing
        margin: '40px auto !important',
        maxWidth: '1200px !important',  // Limit max width for better focus
        background: 'linear-gradient(135deg, #ffecb3 30%, #fff3e0 100%) !important',  // Warm gradient background
        borderRadius: '20px !important',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15) !important',  // Depth shadow for more visual appeal
        position: 'relative !important',
        overflow: 'hidden !important',
        textAlign: 'center !important',
    },
    title: {
        color: '#6A0572 !important',  // Deep purple for contrast
        fontSize: '3rem !important',
        fontWeight: 'bold !important',
        marginBottom: '20px !important',
        textShadow: '2px 4px 8px rgba(0, 0, 0, 0.3) !important',  // Text shadow for depth
    },
    subtitle: {
        fontSize: '1.8rem !important',
        color: '#1B5E20 !important',  // Complementary deep green
        marginBottom: '30px !important',
    },
    list: {
        display: 'grid !important',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr)) !important',  // Responsive grid
        gap: '20px !important',
        padding: '0 !important',
        listStyle: 'none !important',
    },
    listItem: {
        backgroundColor: '#FFFDE7 !important',  // Soft background for each item
        padding: '20px !important',
        borderRadius: '12px !important',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease !important',  // Smooth animations
        display: 'flex !important',
        alignItems: 'center !important',
        '&:hover': {
            transform: 'translateY(-10px) !important',
            boxShadow: '0 12px 20px rgba(0, 0, 0, 0.15) !important',  // Hover shadow and movement
        },
    },
    listItemIcon: {
        marginRight: '15px !important',  // Space between icon and text
        color: '#FF5722 !important',  // Vibrant icon color
        fontSize: '2rem !important',  // Larger icon size
    },
    listItemText: {
        color: '#424242 !important',  // Neutral dark text color
        fontSize: '1.4rem !important',
        fontWeight: 'bold !important',
    },
    floatingGraphics: {
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '150px',
        height: '150px',
        backgroundColor: 'rgba(255, 183, 77, 0.2)',
        borderRadius: '50%',
        zIndex: 0,
    },
    floatingGraphics2: {
        position: 'absolute',
        bottom: '15%',
        right: '-10%',
        width: '200px',
        height: '200px',
        backgroundColor: 'rgba(255, 138, 101, 0.2)',
        borderRadius: '50%',
        zIndex: 0,
    },
}));

const InnovationSection = () => {
    const classes = useStyles();

    const items = [
        { label: 'Fun Blast Solar Robotic Kits', icon: <ToysIcon className={classes.listItemIcon} /> },
        { label: 'Robot Colorful Lights', icon: <ToysIcon className={classes.listItemIcon} /> },
        { label: 'Science DIY Kits', icon: <ScienceIcon className={classes.listItemIcon} /> },
        { label: 'Smart Activity Box', icon: <BuildIcon className={classes.listItemIcon} /> },
        { label: 'Baby Blazzy Board', icon: <ToysIcon className={classes.listItemIcon} /> },
        { label: 'Montessori Activity Board', icon: <BuildIcon className={classes.listItemIcon} /> },
        { label: 'Smart Calendar', icon: <CalendarTodayIcon className={classes.listItemIcon} /> },
        { label: 'Kinder Special Wit Box', icon: <ToysIcon className={classes.listItemIcon} /> },
    ];

    return (
        <Paper className={classes.innovationSection}>
            {/* Floating graphical elements */}
            <div className={classes.floatingGraphics}></div>
            <div className={classes.floatingGraphics2}></div>

            {/* Title and subtitle */}
            <Typography variant="h4" className={classes.title}>
                Innovation Meets Learning
            </Typography>
            <Typography variant="h5" className={classes.subtitle}>
                Our Kinder Robo Toys
            </Typography>

            {/* List of items */}
            <List className={classes.list}>
                {items.map((item, index) => (
                    <ListItem key={index} className={classes.listItem}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <Typography className={classes.listItemText}>{item.label}</Typography>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default InnovationSection;
