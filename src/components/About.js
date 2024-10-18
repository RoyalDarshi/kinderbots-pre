import React from 'react';
import { Container, Typography, Paper, Box, List, ListItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Features from "./Features";
import TeamSection from "./TeamSection";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: `${theme.spacing(3)} !important`,
        backgroundColor: '#F6F9FC !important',
        minHeight: '100vh !important',
    },
    introductionSection: {
        margin: `${theme.spacing(4, 0)} !important`,
        padding: `${theme.spacing(3)} !important`,
        background: 'linear-gradient(120deg, #FFDDC1 30%, #FFABAB 100%) !important',
        borderRadius: '8px !important',
        boxShadow: `${theme.shadows[3]} !important`,
    },
    missionSection: {
        margin: `${theme.spacing(4, 0)} !important`,
        padding: `${theme.spacing(3)} !important`,
        backgroundColor: '#E8F5E9 !important',
        borderRadius: '8px !important',
        boxShadow: `${theme.shadows[3]} !important`,
    },
    historySection: {
        margin: `${theme.spacing(4, 0)} !important`,
        padding: `${theme.spacing(3)} !important`,
        backgroundColor: '#FFF3E0 !important',
        borderRadius: '8px !important',
        boxShadow: `${theme.shadows[3]} !important`,
    },
    title: {
        textAlign: 'center !important',
        marginBottom: `${theme.spacing(2)} !important`,
        fontWeight: 'bold !important',
        color: '#6A0572 !important',
    },
    text: {
        textAlign: 'center !important',
        color: '#333 !important',
    },
    innovationSection: {
        margin: `${theme.spacing(4, 0)} !important`,
        padding: `${theme.spacing(3)} !important`,
        backgroundColor: '#E8F5E9 !important',
        borderRadius: '8px !important',
        boxShadow: `${theme.shadows[3]} !important`,
        textAlign: 'center !important',
    },
    listItem: {
        marginBottom: `${theme.spacing(2)} !important`,
        fontSize: '1.2rem !important',
        fontWeight: 'bold !important',
    },
    teamSection: {
        marginTop: `${theme.spacing(4)} !important`,
    },
    heroSection: {
        background: 'linear-gradient(135deg, #FFABAB 30%, #FFC3A0 70%) !important',
        minHeight: '400px !important',
        display: 'flex !important',
        flexDirection: 'column !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        textAlign: 'center !important',
        borderRadius: '8px !important',
        padding: `${theme.spacing(4)} !important`,
        marginBottom: `${theme.spacing(4)} !important`,
        boxShadow: `${theme.shadows[5]} !important`,
    },
    heroTitle: {
        fontSize: '3rem !important', // Adjusted for mobile
        fontWeight: 'bold !important',
        color: '#6A0572 !important',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5) !important',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.5rem !important', // Smaller on mobile
        },
    },
    heroSubtitle: {
        fontSize: '1.5rem !important', // Adjusted for mobile
        marginTop: `${theme.spacing(1)} !important`,
        color: '#1B5E20 !important',
        textShadow: '1px 1px 3px rgba(0,0,0,0.5) !important',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem !important', // Smaller on mobile
        },
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
            </Paper>

            {/* Mission Statement Section */}
            <Paper className={classes.missionSection}>
                <Typography variant="h4" className={classes.title}>Our Mission</Typography>
                <Typography variant="body1" className={classes.text}>
                    Our mission is to provide a safe, loving, and engaging environment that fosters creativity, curiosity, and a lifelong love for learning. We aim to cultivate each child's unique talents and abilities, preparing them for future academic success.
                </Typography>
            </Paper>

            {/* History Section */}
            <Paper className={classes.historySection}>
                <Typography variant="h4" className={classes.title}>Our History</Typography>
                <Typography variant="body1" className={classes.text}>
                    Established in 2020, Kinderbots Pre-School has quickly become a trusted name in early childhood education. Our founders envisioned a place where children could thrive academically and socially, and we have worked tirelessly to bring that vision to life.
                </Typography>
            </Paper>

            {/* Innovation Section */}
            <Paper className={classes.innovationSection}>
                <Typography variant="h4" className={classes.title}>Innovation Meets Learning</Typography>
                <Typography variant="h5" color="secondary">Our Kinder Robo Toys</Typography>
                <List sx={{ listStyleType: 'none', padding: 0 }}>
                    <ListItem className={classes.listItem} sx={{ color: '#ff5722' }}>
                        Fun Blast Solar Robotic Kits
                    </ListItem>
                    <ListItem className={classes.listItem} sx={{ color: '#673ab7' }}>
                        Robot Colorful Lights
                    </ListItem>
                    <ListItem className={classes.listItem} sx={{ color: '#e91e63' }}>
                        Science DIY Kits
                    </ListItem>
                    <ListItem className={classes.listItem} sx={{ color: '#ff9800' }}>
                        Smart Activity Box
                    </ListItem>
                    <ListItem className={classes.listItem} sx={{ color: '#2196f3' }}>
                        Baby Blazzy Board
                    </ListItem>
                    <ListItem className={classes.listItem} sx={{ color: '#4caf50' }}>
                        Montessori Activity Board
                    </ListItem>
                    <ListItem className={classes.listItem} sx={{ color: '#ffc107' }}>
                        Smart Calendar
                    </ListItem>
                    <ListItem className={classes.listItem} sx={{ color: '#f44336' }}>
                        Kinder Special Wit Box
                    </ListItem>
                </List>
            </Paper>

            {/* Features */}
            <Features />
            {/* Team Section */}
            <TeamSection />
        </Container>
    );
};

export default About;
