import React, { useState } from 'react';
import { Paper, Typography, Grid, Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, Slide } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
    section: {
        padding: '16px !important',
        marginTop: '20px !important',
        borderRadius: '12px !important',
        boxShadow: `${theme.shadows[3]} !important`,
        backgroundColor: '#FFDD00 !important',
        position: 'relative !important',
        overflow: 'hidden !important',
    },
    title: {
        color: '#2DB8B0 !important',
        marginBottom: '12px !important',
        textAlign: 'center !important',
        fontWeight: 'bold !important',
        fontSize: '6vw !important',
        [theme.breakpoints.up('sm')]: {
            fontSize: '2vw !important',
        },
    },
    dialog: {
        background: 'linear-gradient(135deg, #2C3E50 10%, #4CA1AF 90%) !important',
        color: '#ECF0F1 !important',
        width: '95vw !important',
        maxWidth: '600px !important',
        margin: 'auto !important',
        borderRadius: '12px !important',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5) !important',
    },
    dialogTitle: {
        fontSize: '5vw !important',
        textAlign: 'center !important',
        color: '#F39C12 !important',
        fontWeight: 'bold !important',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7) !important',
        [theme.breakpoints.up('sm')]: {
            fontSize: '2.5vw !important',
        },
    },
    dialogContent: {
        color: '#ECF0F1 !important',
        textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7) !important',
        fontSize: '4vw !important',
        padding: '16px !important',
        lineHeight: '1.5 !important',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.5vw !important',
        },
    },
    dialogActions: {
        justifyContent: 'center !important',
        marginTop: '20px !important',
    },
    knowMoreButton: {
        marginTop: '10px !important',
        backgroundColor: '#00796b !important',
        color: '#fff !important',
        transition: 'background-color 0.3s, transform 0.3s !important',
        '&:hover': {
            backgroundColor: '#004d40 !important',
        },
    },
    programCard: {
        padding: `${theme.spacing(3)} !important`,
        textAlign: 'center !important',
        borderRadius: '12px !important',
        boxShadow: theme.shadows[3],
        backgroundColor: '#FFF !important',
        transition: 'transform 0.3s, box-shadow 0.3s !important',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: theme.shadows[10],
        },
    },
    programIcon: {
        fontSize: '50px !important',
        marginBottom: `${theme.spacing(1)} !important`,
        color: '#F26A2A',
    },
    backgroundDecor: {
        position: 'absolute !important',
        width: '50px !important',
        height: '50px !important',
        borderRadius: '50% !important',
        backgroundColor: 'rgba(255, 255, 255, 0.2) !important',
        opacity: 0.5,
        animation: '$pulse 2s infinite !important',
    },
    '@keyframes pulse': {
        '0%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.05)' },
        '100%': { transform: 'scale(1)' },
    },
}));

// Slide animation for modal
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ProgramsSection = () => {
    const classes = useStyles();
    const theme = useTheme();

    // Dialog state management
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogContent, setDialogContent] = useState('');

    const handleClickOpen = (content) => {
        setDialogContent(content);
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    const programs = [
        {
            name: 'Early Learners',
            description: 'Engaging activities to stimulate young minds.',
            details: 'This program is designed for children aged 3-5 years, focusing on foundational skills through play and exploration. Each session will incorporate sensory activities, storytime, and guided play to enhance motor skills and social interaction. Our trained educators will provide a nurturing environment that encourages curiosity, creativity, and confidence in young learners. Parents will receive updates on their child’s progress, ensuring a holistic approach to early development.'
        },
        {
            name: 'Creative Arts',
            description: 'Encouraging creativity through various art forms.',
            details: 'Children will explore painting, music, and dance to express themselves and build confidence in their creativity. This program fosters self-expression by allowing children to experiment with different materials and techniques. Through structured activities, they will learn about colors, shapes, and rhythm while developing fine motor skills. Each week culminates in a showcase where children can display their creations, helping to boost their self-esteem and public speaking abilities.'
        },
        {
            name: 'Science Explorers',
            description: 'Hands-on science experiments and activities.',
            details: 'This program sparks curiosity in young learners through fun and interactive science experiments that promote critical thinking. Each session will feature exciting experiments, such as making slime, growing crystals, and simple physics projects that illustrate basic scientific concepts. Children will work in small groups to encourage teamwork and collaboration, while also developing problem-solving skills. Parents will be invited to special events where their children can present their scientific discoveries.'
        },
        {
            name: 'Language Fun',
            description: 'Interactive games and activities to enhance language skills.',
            details: 'Designed for kids to learn new words and improve their communication through stories, songs, and games. The program emphasizes phonemic awareness, vocabulary development, and comprehension skills through engaging storytelling and interactive activities. Children will participate in group discussions, role-playing, and creative writing exercises, helping them to express their thoughts and ideas clearly. Regular assessments will ensure that each child is progressing and receiving the support they need.'
        },
        {
            name: 'Nature Adventures',
            description: 'Exploring the outdoors and understanding nature.',
            details: 'In this program, children will engage in outdoor activities that foster a love for nature and teach them about the environment. They will participate in nature walks, gardening, and environmental crafts that help them understand the importance of conservation. Children will learn to identify local plants and animals, fostering an appreciation for biodiversity. The program aims to develop respect for the environment while encouraging physical activity and teamwork through fun group challenges.'
        },
        {
            name: 'Math Magic',
            description: 'Fun and engaging activities to enhance math skills.',
            details: 'This program uses games and interactive challenges to make math fun, helping children develop strong numeracy skills. Activities will include puzzles, group games, and hands-on projects that relate math concepts to real-life situations. By incorporating storytelling and music, children will find joy in learning numbers, shapes, and patterns. Regular assessments will allow for personalized feedback, ensuring that each child is challenged appropriately and supported in their learning journey.'
        },
    ];


    return (
        <Paper className={classes.section}>
            <Typography variant="h4" className={classes.title}>
                Our Programs
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {programs.map((program) => (
                    <Grid item xs={12} sm={6} md={4} key={program.name}>
                        <div className={classes.programCard}>
                            <Box className={classes.programIcon}>&#127859;</Box> {/* Icon for the program */}
                            <Typography variant="h6" style={{ color: '#2DB8B0' }}>{program.name}</Typography>
                            <Typography variant="body2">{program.description}</Typography>
                            <Button
                                variant="contained"
                                className={classes.knowMoreButton}
                                onClick={() => handleClickOpen(program.details)}
                            >
                                Know More
                            </Button>
                        </div>
                    </Grid>
                ))}
            </Grid>

            {/* Dialog for additional information */}
            <Dialog
                open={openDialog}
                onClose={handleClose}
                TransitionComponent={Transition}
                classes={{ paper: classes.dialog }}
            >
                <DialogTitle className={classes.dialogTitle}>More Information</DialogTitle>
                <DialogContent>
                    <Typography className={classes.dialogContent}>{dialogContent}</Typography>
                </DialogContent>
                <DialogActions className={classes.dialogActions}>
                    <Button onClick={handleClose} style={{ backgroundColor: '#004d40', color: '#fff' }}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Background decoration */}
            <div className={classes.backgroundDecor} style={{ top: '10%', left: '10%' }} />
            <div className={classes.backgroundDecor} style={{ bottom: '10%', right: '10%' }} />
        </Paper>
    );
};

export default ProgramsSection;
