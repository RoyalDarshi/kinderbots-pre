import React from 'react';
import { Paper, Typography, Grid, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Sample team data
const teamMembers = [
    {
        name: 'Alice Johnson',
        position: 'Founder & CEO',
        imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
        name: 'John Smith',
        position: 'Chief Operating Officer',
        imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
        name: 'Emily Davis',
        position: 'Head of Education',
        imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
        name: 'Michael Brown',
        position: 'Lead Developer',
        imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
        name: 'Sarah Wilson',
        position: 'Marketing Manager',
        imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
        name: 'David Lee',
        position: 'Creative Director',
        imageUrl: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
];

const useStyles = makeStyles((theme) => ({
    teamSection: {
        margin: theme.spacing(4, 0),
        padding: theme.spacing(3),
        backgroundColor: '#F3E5F5',
        borderRadius: '8px',
        boxShadow: theme.shadows[3],
        textAlign: 'center',
    },
    title: {
        marginBottom: theme.spacing(3),
        fontWeight: 'bold',
        color: '#6A0572',
    },
    memberCard: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    avatar: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        margin: '0 auto',
        marginBottom: theme.spacing(1),
    },
    name: {
        fontWeight: 'bold',
        color: '#4A148C',
    },
    position: {
        color: '#7B1FA2',
    },
}));

const TeamSection = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.teamSection}>
            <Typography variant="h4" className={classes.title}>
                Meet Our Team
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {teamMembers.map((member, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <div className={classes.memberCard}>
                            <Avatar alt={member.name} src={member.imageUrl} className={classes.avatar} />
                            <Typography variant="h6" className={classes.name}>
                                {member.name}
                            </Typography>
                            <Typography variant="body1" className={classes.position}>
                                {member.position}
                            </Typography>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default TeamSection;
