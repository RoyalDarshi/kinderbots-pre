// src/pages/Home.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box, Paper, List, ListItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import img1 from "../assets/gallery1.png";
import img2 from "../assets/gallery2.png";
import img3 from "../assets/gallery3.png";
import img4 from "../assets/gallery4.png";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        backgroundColor: '#F9F6FB', // Lighter background to add contrast
        minHeight: '100vh',
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        },
    },
    hero: {
        textAlign: 'center',
        padding: theme.spacing(4),
        background: 'linear-gradient(90deg, #F26A2A 0%, #FFDD00 100%)', // Bright gradient
        color: 'white',
        borderRadius: '8px',
        boxShadow: theme.shadows[3],
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        },
    },
    section: {
        margin: theme.spacing(4, 0),
        padding: theme.spacing(3), // Increased padding for better spacing
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: theme.shadows[3],
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(2, 0),
            padding: theme.spacing(2),
        },
    },
    card: {
        margin: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: '#FFF',
        boxShadow: theme.shadows[2],
        borderRadius: '10px',
        transition: 'transform 0.3s ease, background-color 0.3s ease',
        '&:hover': {
            transform: 'scale(1.05)',
            backgroundColor: '#F9F6FB',
        },
    },
    button: {
        marginTop: theme.spacing(2),
        backgroundColor: '#2DB8B0',
        color: 'white',
        fontSize: '16px',
        fontWeight: 'bold',
        borderRadius: '8px',
        '&:hover': {
            backgroundColor: '#28A598',
        },
    },
    imageGallery: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: theme.spacing(2),
    },
    galleryImage: {
        width: '300px',
        height: '200px',
        borderRadius: '12px',
        objectFit: 'cover',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    directorMessage: {
        padding: theme.spacing(3),
        backgroundColor: '#FFDD00',
        color: '#2DB8B0',
        borderRadius: '12px',
        boxShadow: theme.shadows[3],
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        },
    },
    directorTitle: {
        color: '#f54292',
        fontWeight: 'bold',
        marginBottom: theme.spacing(2),
    },
    directorBody: {
        marginBottom: theme.spacing(2),
        color: '#333',
    },
    directorName: {
        fontWeight: 'bold',
        fontSize: '24px',
        color: '#333',
        marginTop: theme.spacing(2),
    },
    directorRole: {
        fontStyle: 'italic',
        color: '#666',
    },
    directorBadge: {
        backgroundColor: '#2DB8B0',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '5px',
        display: 'inline-block',
        marginTop: theme.spacing(1),
    },
    featuresSection: {
        padding: theme.spacing(5),
        backgroundColor: '#e0f7fa',
    },
    featureTitle: {
        textAlign: 'center',
        color: '#00796b',
        marginBottom: theme.spacing(3),
        fontWeight: 'bold',
    },
    featureCard: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        margin: theme.spacing(2, 0),
        borderLeft: '6px solid #00796b',
        transition: 'transform 0.2s',
        '&:hover': {
            transform: 'scale(1.05)',
            backgroundColor: '#80deea',
        },
    },
    featureNumber: {
        fontSize: '1.5rem', // Increased font size for better visibility
        fontWeight: 'bold',
        color: '#00796b',
    },
    featureText: {
        marginTop: theme.spacing(1),
        fontWeight: '500',
        color: '#333',
    },
}));

const Home = () => {
    const classes = useStyles();
    const salientFeatures = [
        { number: 1, text: 'Shining Brand Benefits' },
        { number: 2, text: 'Curriculum Support' },
        { number: 3, text: 'Daily Planner' },
        { number: 4, text: 'Large Community Part' },
        { number: 5, text: 'Teacher\'s Training' },
        { number: 6, text: 'Owner\'s Training' },
        { number: 7, text: 'Learn to Operate Your School' },
        { number: 8, text: 'Get Admission Through Our AI System' },
        { number: 9, text: '24x7 Support' },
        { number: 10, text: 'AI-Based School Operations' },
        { number: 11, text: 'Free Home Tutors for Children' },
        { number: 12, text: 'Marketing Designs and Guidance' },
        { number: 13, text: 'Holistic Growth of Students' },
        { number: 14, text: 'Unraveling Success' },
        { number: 15, text: 'No Royalty' },
        { number: 16, text: 'Learn from Other Branches' },
        { number: 17, text: 'Annual Franchise Meet' },
        { number: 18, text: 'New NEP-Based Curriculum' },
        { number: 19, text: 'Comprehensive School Management System' },
        { number: 20, text: 'Robotic Play Toys' },
        { number: 21, text: 'Pocket-Friendly Student Kits' },
        { number: 22, text: 'Multiple Award Recognition' },
        { number: 23, text: 'AI Specialist Shall Get Your Branch to Sky' },
        { number: 24, text: 'Dedicated Relationship Manager' },
    ];

    return (
        <Container className={classes.root}>
            {/* Hero Section */}
            <div className={classes.hero}>
                <Typography variant="h2" gutterBottom>Welcome to Kinderbots Pre-School!</Typography>
                <Typography variant="h5">Where Learning is Fun and Engaging</Typography>
                <Button variant="contained" href="/enroll" className={classes.button}>
                    Enroll Now
                </Button>
            </div>

            {/* Mission Statement Section */}
            <Paper className={classes.section}>
                <Typography variant="h4" align="center" style={{ color: '#2DB8B0' }}>Our Mission</Typography>
                <Typography variant="body1" align="center" style={{ margin: '20px 0', color: '#555' }}>
                    At Kinderbots Pre-School, our mission is to nurture, inspire, and cultivate young minds through a
                    play-based curriculum that encourages creativity, curiosity, and a love for learning.
                </Typography>
            </Paper>

            {/* Director's Message Section */}
            <Paper className={classes.directorMessage}>
                <Typography variant="h5" className={classes.directorTitle}>Director's Message</Typography>
                <Typography variant="body1" className={classes.directorBody}>
                    Welcome to Kinderbots, where young minds explore, create, and innovate alongside our cutting-edge
                    companions.
                </Typography>
                <Typography variant="body1" className={classes.directorBody}>
                    Here, curiosity meets technology, nurturing a place where imagination knows no bounds.
                </Typography>
                <Typography variant="body1" className={classes.directorBody}>
                    Let’s embark on this exciting journey together.
                </Typography>
                <Box className={classes.directorBadge}>Founder, Director</Box>
                <Typography variant="h5" className={classes.directorName}>Divya Tiwari</Typography>
                <Typography variant="body1" className={classes.directorRole}>KINDERBOTS PVT. LTD.</Typography>
            </Paper>

            {/* Programs Section */}
            <Paper className={classes.section}>
                <Typography variant="h4" align="center" style={{ color: '#FF6F61' }}>Our Programs</Typography>
                <Grid container spacing={3} className={classes.imageGallery}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <img src={img1} alt="Program 1" className={classes.galleryImage} />
                            <CardContent>
                                <Typography variant="h5">Creative Play</Typography>
                                <Typography variant="body2" color="textSecondary">Fostering creativity through play.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <img src={img2} alt="Program 2" className={classes.galleryImage} />
                            <CardContent>
                                <Typography variant="h5">Art & Crafts</Typography>
                                <Typography variant="body2" color="textSecondary">Exploring art and craft skills.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <img src={img3} alt="Program 3" className={classes.galleryImage} />
                            <CardContent>
                                <Typography variant="h5">STEM Activities</Typography>
                                <Typography variant="body2" color="textSecondary">Engaging in STEM learning through fun.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Paper>

            {/* Salient Features Section */}
            <Paper className={classes.featuresSection}>
                <Typography variant="h4" className={classes.featureTitle}>Salient Features</Typography>
                <Grid container spacing={2}>
                    {salientFeatures.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <div className={classes.featureCard}>
                                <div className={classes.featureNumber}>{feature.number}</div>
                                <Typography variant="body2" className={classes.featureText}>{feature.text}</Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Paper>

            {/* Footer Section */}
            <Paper className={classes.section}>
                <Typography variant="h6" align="center" style={{ color: '#2DB8B0' }}>Contact Us</Typography>
                <List>
                    <ListItem>Address: 123 Kinderbots Lane, Education City</ListItem>
                    <ListItem>Email: info@kinderbots.com</ListItem>
                    <ListItem>Phone: +1 (234) 567-8901</ListItem>
                </List>
                <Button variant="contained" href="/contact" className={classes.button}>
                    Get in Touch
                </Button>
            </Paper>
        </Container>
    );
};

export default Home;
