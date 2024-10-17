// src/components/ContactForm.js
import React, { useState } from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
    Paper,
    Grid,
    Snackbar,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import MuiAlert from '@mui/material/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        minHeight: '100vh',
        backgroundColor: '#F6F9FC',
    },
    paper: {
        padding: theme.spacing(3),
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: theme.shadows[3],
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

const Alert = React.forwardRef((props, ref) => (
    <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const Contact = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to API)
        setOpenSnackbar(true);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Container className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant="h4" align="center">Contact Us</Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {/* Name */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                required
                                label="Your Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </Grid>

                        {/* Email */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                required
                                type="email"
                                label="Email Address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Grid>

                        {/* Subject */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label="Subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </Grid>

                        {/* Message */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label="Your Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                multiline
                                rows={4}
                            />
                        </Grid>

                        {/* Submit Button */}
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                            >
                                Send Message
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>

            {/* Snackbar for submission confirmation */}
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success">
                    Your message has been sent successfully!
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default Contact;
