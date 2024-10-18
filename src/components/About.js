import React from 'react';
import { Container, Typography, Paper, Grid, Card, CardContent, Button, Box, List, ListItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Features from "./Features";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        backgroundColor: '#F6F9FC',
        minHeight: '100vh',
    },
    introductionSection: {
        margin: theme.spacing(4, 0),
        padding: theme.spacing(3),
        background: 'linear-gradient(120deg, #FFDDC1 30%, #FFABAB 100%)',
        borderRadius: '8px',
        boxShadow: theme.shadows[3],
        position: 'relative',
        overflow: 'hidden',
    },
    missionSection: {
        margin: theme.spacing(4, 0),
        padding: theme.spacing(3),
        backgroundColor: '#E8F5E9',
        borderRadius: '8px',
        boxShadow: theme.shadows[3],
        position: 'relative',
        overflow: 'hidden',
    },
    historySection: {
        margin: theme.spacing(4, 0),
        padding: theme.spacing(3),
        backgroundColor: '#FFF3E0',
        borderRadius: '8px',
        boxShadow: theme.shadows[3],
        position: 'relative',
        overflow: 'hidden',
    },
    introductionText: {
        textAlign: 'center',
        margin: theme.spacing(2, 0),
        color: '#3E2723',
        fontWeight: 'bold',
        zIndex: 1,
    },
    colorfulShapes: {
        position: 'absolute',
        zIndex: 0,
    },
    circle: {
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        background: 'rgba(255, 111, 97, 0.7)', // Semi-transparent color
        position: 'absolute',
        top: '10%',  // Positioning the circle in the top-left corner
        left: '10%',
        transform: 'translate(-50%, -50%)',
        zIndex: 0,
    },
    square: {
        width: '120px',
        height: '120px',
        background: 'rgba(107, 191, 89, 0.7)', // Semi-transparent color
        position: 'absolute',
        bottom: '10%',  // Positioning the square in the bottom-right corner
        right: '10%',
        transform: 'translate(50%, 50%)',
        zIndex: 0,
    },
    section: {
        margin: theme.spacing(4, 0),
        padding: theme.spacing(3),
        borderRadius: '8px',
        boxShadow: theme.shadows[3],
    },
    title: {
        textAlign: 'center',
        marginBottom: theme.spacing(2),
        fontWeight: 'bold',
        color: '#6A0572',
    },
    text: {
        textAlign: 'center',
        color: '#333',
    },
    innovationSection: {
        margin: theme.spacing(4, 0),
        padding: theme.spacing(3),
        backgroundColor: '#E8F5E9',
        borderRadius: '8px',
        boxShadow: theme.shadows[3],
        textAlign: 'center',
    },
    listItem: {
        marginBottom: theme.spacing(2),
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    teamSection: {
        marginTop: theme.spacing(4),
    },
    teamCard: {
        margin: theme.spacing(2),
        backgroundColor: '#FFFDE7',
        padding: theme.spacing(2),
        borderRadius: '8px',
        boxShadow: theme.shadows[2],
    },
    button: {
        marginTop: theme.spacing(2),
        backgroundColor: '#ff7043',
        color: 'white',
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: '#e64a19',
        },
    },
    heroSection: {
        background: 'linear-gradient(135deg, #FFABAB 30%, #FFC3A0 70%)',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: '8px',
        padding: theme.spacing(4),
        marginBottom: theme.spacing(4),
        boxShadow: theme.shadows[5],
    },
    heroTitle: {
        fontSize: '4rem',
        fontWeight: 'bold',
        color: '#6A0572',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    },
    heroSubtitle: {
        fontSize: '1.8rem',
        marginTop: theme.spacing(1),
        color: '#1B5E20',
        textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
    },
}));

const About = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            {/* Hero Section */}
            <Box className={classes.heroSection}>
                <Typography variant="h1" className={classes.heroTitle}>Kinderbots Pre-School</Typography>
                <Typography variant="h4" className={classes.heroSubtitle}>Nurturing Young Minds for a Brighter Future</Typography>
            </Box>

            {/* Introduction Section */}
            <Paper className={classes.introductionSection}>
                <Typography variant="h4" className={classes.title}>
                    About Kinderbots Pre-School
                </Typography>
                <Typography variant="body1" className={classes.text}>
                    At Kinderbots Pre-School, we believe in creating a nurturing and inspiring environment where young children can explore, learn, and grow. Our dedicated staff and innovative curriculum ensure that every child develops a love for learning and reaches their full potential.
                </Typography>
                <Box className={classes.circle} style={{ top: '5%', left: '5%' }} />
                <Box className={classes.square} style={{ bottom: '5%', right: '5%' }} />
            </Paper>

            {/* Mission Statement Section */}
            <Paper className={classes.missionSection}>
                <Typography variant="h4" className={classes.title}>Our Mission</Typography>
                <Typography variant="body1" className={classes.text}>
                    Our mission is to provide a safe, loving, and engaging environment that fosters creativity, curiosity, and a lifelong love for learning. We aim to cultivate each child's unique talents and abilities, preparing them for future academic success.
                </Typography>
                <Box className={classes.circle} style={{ top: '5%', left: '5%' }} />
                <Box className={classes.square} style={{ bottom: '5%', right: '5%' }} />
            </Paper>

            {/* History Section */}
            <Paper className={classes.historySection}>
                <Typography variant="h4" className={classes.title}>Our History</Typography>
                <Typography variant="body1" className={classes.text}>
                    Established in 2020, Kinderbots Pre-School has quickly become a trusted name in early childhood education. Our founders envisioned a place where children could thrive academically and socially, and we have worked tirelessly to bring that vision to life.
                </Typography>
                <Box className={classes.circle} style={{ top: '5%', left: '5%' }} />
                <Box className={classes.square} style={{ bottom: '5%', right: '5%' }} />
            </Paper>

            {/* Innovation Section */}
            <Paper className={classes.innovationSection}>
                <Typography variant="h4" className={classes.title}>Innovation Meets Learning</Typography>
                <Typography variant="h5" color="secondary">Our Kinder Robo Toys</Typography>
                <List sx={{ listStyleType: 'none', padding: 0 }}>
                    <ListItem className={classes.listItem} sx={{ color: '#ff5722' }}>Fun Blast Solar Robotic Kits</ListItem>
                    <ListItem className={classes.listItem} sx={{ color: '#673ab7' }}>Robot Colorful Lights</ListItem>
                    <ListItem className={classes.listItem} sx={{ color: '#e91e63' }}>Science DIY Kits</ListItem>
                    <ListItem className={classes.listItem} sx={{ color: '#ff9800' }}>Smart Activity Box</ListItem>
                    <ListItem className={classes.listItem} sx={{ color: '#2196f3' }}>Baby Blazzy Board</ListItem>
                    <ListItem className={classes.listItem} sx={{ color: '#4caf50' }}>Montessori Activity Board</ListItem>
                    <ListItem className={classes.listItem} sx={{ color: '#ffc107' }}>Smart Calendar</ListItem>
                    <ListItem className={classes.listItem} sx={{ color: '#f44336' }}>Kinder Special Wit Box</ListItem>
                </List>
            </Paper>
            <Features />
            {/* Team Section */}
            <Paper className={classes.section}>
                <Typography variant="h4" className={classes.title}>Meet Our Team</Typography>
                <Grid container spacing={2} justifyContent="center" className={classes.teamSection}>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card className={classes.teamCard}>
                                <CardContent>
                                    <Typography variant="h5">Teacher {index + 1}</Typography>
                                    <Typography variant="body2">Early Childhood Educator</Typography>
                                    {/*<Button variant="contained" className={classes.button}>Read More</Button>*/}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Container>
    );
};

export default About;
