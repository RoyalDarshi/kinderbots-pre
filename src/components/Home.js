// src/pages/Home.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import img1 from "../assets/gallery1.png"
import img2 from "../assets/gallery2.png"
import img3 from "../assets/gallery3.png"
import img4 from "../assets/gallery4.png"

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        backgroundColor: '#F6F9FC',
        minHeight: '100vh',
    },
    hero: {
        textAlign: 'center',
        padding: theme.spacing(4),
        backgroundColor: '#F26A2A',
        color: 'white',
    },
    section: {
        margin: theme.spacing(4, 0),
        padding: theme.spacing(2),
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: theme.shadows[3],
    },
    card: {
        margin: theme.spacing(2),
        textAlign: 'center',
    },
    button: {
        marginTop: theme.spacing(2),
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
        borderRadius: '8px',
        objectFit: 'cover',
    },
}));

const Home = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            {/* Hero Section */}
            <div className={classes.hero}>
                <Typography variant="h2">Welcome to Kinderbots Pre-School!</Typography>
                <Typography variant="h5">Where Learning is Fun and Engaging</Typography>
                <Button variant="contained" color="secondary" href="/enroll" className={classes.button}>
                    Enroll Now
                </Button>
            </div>

            {/* Mission Statement Section */}
            <Paper className={classes.section}>
                <Typography variant="h4" align="center">Our Mission</Typography>
                <Typography variant="body1" align="center" style={{ margin: '20px 0' }}>
                    At Kinderbots Pre-School, our mission is to nurture, inspire, and cultivate young minds through a play-based curriculum that encourages creativity, curiosity, and a love for learning.
                </Typography>
            </Paper>

            {/* Programs Section */}
            <Paper className={classes.section}>
                <Typography variant="h4" align="center">Our Programs</Typography>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h5">Early Childhood Education</Typography>
                                <Typography variant="body2">Developing essential skills through play and interaction.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h5">Creative Arts</Typography>
                                <Typography variant="body2">Nurturing creativity through art, music, and drama.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h5">Physical Education</Typography>
                                <Typography variant="body2">Promoting health and fitness through active play.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Paper>

            {/* Featured Staff Section */}
            <Paper className={classes.section}>
                <Typography variant="h4" align="center">Meet Our Dedicated Staff</Typography>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h5">Divya Tiwari</Typography>
                                <Typography variant="body2">Founder,Director</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h5">John Doe</Typography>
                                <Typography variant="body2">Creative Arts Coordinator</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h5">Emily Johnson</Typography>
                                <Typography variant="body2">Physical Education Teacher</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Paper>

            {/* Gallery Section */}
            <Paper className={classes.section}>
                <Typography variant="h4" align="center">Gallery</Typography>
                <div className={classes.imageGallery}>
                    <img className={classes.galleryImage} src={`${img1}`} alt="Activity 1" />
                    <img className={classes.galleryImage} src={`${img2}`} alt="Activity 2" />
                    <img className={classes.galleryImage} src={`${img3}`} alt="Activity 3" />
                    <img className={classes.galleryImage} src={`${img4}`} alt="Activity 4" />
                </div>
            </Paper>

            {/* Testimonials Section */}
            <Paper className={classes.section}>
                <Typography variant="h4" align="center">What Parents Say</Typography>
                <Typography variant="body1" align="center" style={{ margin: '20px 0' }}>
                    "Kinderbots Pre-School has transformed my child's learning experience. Highly recommended!"
                </Typography>
                <Typography variant="body1" align="center">
                    - Rahul Kumar, Parent
                </Typography>
            </Paper>

            {/* Call to Action Section */}
            <Paper className={classes.section} style={{ textAlign: 'center' }}>
                <Typography variant="h4">Ready to Start Your Journey?</Typography>
                <Button variant="contained" color="secondary" href="/admissions" className={classes.button}>
                    Learn More About Admissions
                </Button>
            </Paper>
        </Container>
    );
};

export default Home;
