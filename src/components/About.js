// src/pages/AboutUs.js
import React from 'react';
import { Container, Typography, Paper, Grid, Card, CardContent, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        backgroundColor: '#F6F9FC',
        minHeight: '100vh',
    },
    section: {
        margin: theme.spacing(4, 0),
        padding: theme.spacing(3),
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: theme.shadows[3],
    },
    mission: {
        textAlign: 'center',
        margin: theme.spacing(2, 0),
    },
    team: {
        marginTop: theme.spacing(4),
    },
    card: {
        margin: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

const About = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            {/* Introduction Section */}
            <Paper className={classes.section}>
                <Typography variant="h4" align="center">About Kinderbots Pre-School</Typography>
                <Typography variant="body1" align="center" style={{ margin: '20px 0' }}>
                    At Kinderbots Pre-School, we believe in creating a nurturing and inspiring environment where young children can explore, learn, and grow. Our dedicated staff and innovative curriculum ensure that every child develops a love for learning and reaches their full potential.
                </Typography>
            </Paper>

            {/* Mission Statement Section */}
            <Paper className={classes.section}>
                <Typography variant="h4" align="center">Our Mission</Typography>
                <Typography variant="body1" align="center" style={{ margin: '20px 0' }}>
                    Our mission is to provide a safe, loving, and engaging environment that fosters creativity, curiosity, and a lifelong love for learning. We aim to cultivate each child's unique talents and abilities, preparing them for future academic success.
                </Typography>
            </Paper>

            {/* History Section */}
            <Paper className={classes.section}>
                <Typography variant="h4" align="center">Our History</Typography>
                <Typography variant="body1" align="center" style={{ margin: '20px 0' }}>
                    Established in 2020, Kinderbots Pre-School has quickly become a trusted name in early childhood education. Our founders envisioned a place where children could thrive academically and socially, and we have worked tirelessly to bring that vision to life.
                </Typography>
            </Paper>

            {/* Team Section */}
            <Paper className={classes.section}>
                <Typography variant="h4" align="center">Meet Our Team</Typography>
                <Grid container spacing={2} justifyContent="center" className={classes.team}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h5">Jane Smith</Typography>
                                <Typography variant="body2">Founder & Lead Educator</Typography>
                                <Typography variant="body1">With over 10 years of experience in early childhood education, Jane is passionate about creating engaging learning experiences.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h5">John Doe</Typography>
                                <Typography variant="body2">Curriculum Developer</Typography>
                                <Typography variant="body1">John specializes in developing innovative curricula that foster creativity and critical thinking in young learners.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h5">Emily Johnson</Typography>
                                <Typography variant="body2">Child Psychologist</Typography>
                                <Typography variant="body1">Emily provides support and guidance to ensure that every child's emotional and developmental needs are met.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Paper>

            {/* Call to Action Section */}
            <Paper className={classes.section} style={{ textAlign: 'center' }}>
                <Typography variant="h4">Join Our Community</Typography>
                <Typography variant="body1" style={{ margin: '20px 0' }}>
                    Ready to see what Kinderbots Pre-School can offer your child? We invite you to schedule a tour and discover our engaging programs firsthand!
                </Typography>
                <Button variant="contained" color="secondary" href="/admissions" className={classes.button}>
                    Schedule a Tour
                </Button>
            </Paper>
        </Container>
    );
};

export default About;
