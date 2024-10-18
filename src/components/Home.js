// src/pages/Home.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import img1 from "../assets/gallery1.png";
import img2 from "../assets/gallery2.png";
import img3 from "../assets/gallery3.png";
import img4 from "../assets/gallery4.png";
import GrowthPoster from "./GrowthPoster";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: `${theme.spacing(3)} !important`,
        backgroundColor: '#F9F6FB !important',
        minHeight: '100vh !important',
        [theme.breakpoints.down('sm')]: {
            padding: `${theme.spacing(2)} !important`,
        },
    },
    hero: {
        textAlign: 'center !important',
        padding: `${theme.spacing(4)} !important`,
        background: 'linear-gradient(90deg, #F26A2A 0%, #FFDD00 100%) !important',
        color: 'white !important',
        borderRadius: '8px !important',
        boxShadow: `${theme.shadows[3]} !important`,
        [theme.breakpoints.down('sm')]: {
            padding: `${theme.spacing(2)} !important`,
        },
    },
    section: {
        margin: `${theme.spacing(4, 0)} !important`,
        padding: `${theme.spacing(3)} !important`,
        backgroundColor: '#fff !important',
        borderRadius: '12px !important',
        boxShadow: `${theme.shadows[3]} !important`,
        [theme.breakpoints.down('sm')]: {
            margin: `${theme.spacing(2, 0)} !important`,
            padding: `${theme.spacing(2)} !important`,
        },
    },
    card: {
        margin: `${theme.spacing(2)} !important`,
        textAlign: 'center !important',
        backgroundColor: '#FFF !important',
        boxShadow: `${theme.shadows[2]} !important`,
        borderRadius: '10px !important',
        transition: 'transform 0.3s ease, background-color 0.3s ease !important',
        '&:hover': {
            transform: 'scale(1.05) !important',
            backgroundColor: '#F9F6FB !important',
        },
    },
    button: {
        marginTop: `${theme.spacing(2)} !important`,
        backgroundColor: '#2DB8B0 !important',
        color: 'white !important',
        fontSize: '16px !important',
        fontWeight: 'bold !important',
        borderRadius: '8px !important',
        '&:hover': {
            backgroundColor: '#28A598 !important',
        },
    },
    imageGallery: {
        display: 'flex !important',
        justifyContent: 'center !important',
        flexWrap: 'wrap !important',
        gap: `${theme.spacing(2)} !important`,
    },
    galleryImage: {
        width: '300px !important',
        height: '200px !important',
        borderRadius: '12px !important',
        objectFit: 'cover !important',
        [theme.breakpoints.down('sm')]: {
            width: '100% !important',
        },
    },
    directorMessage: {
        padding: `${theme.spacing(3)} !important`,
        backgroundColor: '#FFDD00 !important',
        color: '#2DB8B0 !important',
        borderRadius: '12px !important',
        boxShadow: `${theme.shadows[3]} !important`,
        textAlign: 'center !important',
        [theme.breakpoints.down('sm')]: {
            padding: `${theme.spacing(2)} !important`,
        },
    },
    directorTitle: {
        color: '#f54292 !important',
        fontWeight: 'bold !important',
        marginBottom: `${theme.spacing(2)} !important`,
    },
    directorBody: {
        marginBottom: `${theme.spacing(2)} !important`,
        color: '#333 !important',
    },
    directorName: {
        fontWeight: 'bold !important',
        fontSize: '24px !important',
        color: '#333 !important',
        marginTop: `${theme.spacing(2)} !important`,
    },
    directorRole: {
        fontStyle: 'italic !important',
        color: '#666 !important',
    },
    directorBadge: {
        backgroundColor: '#2DB8B0 !important',
        color: 'white !important',
        padding: '5px 10px !important',
        borderRadius: '5px !important',
        display: 'inline-block !important',
        marginTop: `${theme.spacing(1)} !important`,
    },
    featuresSection: {
        padding: `${theme.spacing(5)} !important`,
        backgroundColor: '#e0f7fa !important',
    },
    featureTitle: {
        textAlign: 'center !important',
        color: '#00796b !important',
        marginBottom: `${theme.spacing(3)} !important`,
        fontWeight: 'bold !important',
    },
    featureCard: {
        padding: `${theme.spacing(2)} !important`,
        textAlign: 'center !important',
        backgroundColor: '#ffffff !important',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1) !important',
        borderRadius: '8px !important',
        margin: `${theme.spacing(2, 0)} !important`,
        borderLeft: '6px solid #00796b !important',
        transition: 'transform 0.2s !important',
        '&:hover': {
            transform: 'scale(1.05) !important',
            backgroundColor: '#80deea !important',
        },
    },
    featureNumber: {
        fontSize: '1.5rem !important',
        fontWeight: 'bold !important',
        color: '#00796b !important',
    },
    featureText: {
        marginTop: `${theme.spacing(1)} !important`,
        fontWeight: '500 !important',
        color: '#333 !important',
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
                <Typography variant="h4" align="center" style={{ color: '#2DB8B0 !important' }}>Our Mission</Typography>
                <Typography variant="body1" align="center" style={{ margin: '20px 0', color: '#555 !important' }}>
                    At Kinderbots Pre-School, our mission is to nurture, inspire, and cultivate young minds through a
                    play-based curriculum that encourages creativity, curiosity, and a love for learning.
                </Typography>
            </Paper>

            {/* Director's Message Section */}
            <Paper className={classes.directorMessage}>
                <Typography variant="h5" className={classes.directorTitle}>Director's Message</Typography>
                <Typography variant="body1" className={classes.directorBody}>
                    "Our goal is to provide a nurturing and stimulating environment where children can thrive academically,
                    emotionally, and socially. At Kinderbots, we believe that every child is unique and deserves a
                    personalized learning experience."
                </Typography>
                <Typography className={classes.directorName}>Divya Tiwari</Typography>
                <Box className={classes.directorBadge}>Founder, Director</Box>
                <Typography className={classes.directorRole}>Kinderbots Pre-School</Typography>
            </Paper>

            {/* Features Section */}
            <section className={classes.featuresSection}>
                <Typography variant="h4" align="center" className={classes.featureTitle}>
                    Our Programs
                </Typography>
                <Grid container spacing={4}>
                    {salientFeatures.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card className={classes.featureCard}>
                                <CardContent>
                                    <Typography variant="h5" className={classes.featureNumber}>
                                        {feature.number}
                                    </Typography>
                                    <Typography className={classes.featureText}>
                                        {feature.text}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </section>
            <GrowthPoster />
        </Container>
    );
};

export default Home;
