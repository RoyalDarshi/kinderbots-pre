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
        padding: theme.spacing(4),
        minHeight: '100vh',
        backgroundColor: '#E8F5E9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url("/path/to/your/background-image.png")', // Optional background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        padding: theme.spacing(4),
        backgroundColor: '#FFFFFF !important',
        borderRadius: '16px',
        boxShadow: theme.shadows[10],
        width: '100%',
        maxWidth: '600px',
    },
    title: {
        paddingBottom: theme.spacing(2),
        fontWeight: 'bold',
        color: theme.palette.primary.main,
        fontSize: '2rem',
        textAlign: 'center',
    },
    textField: {
        marginBottom: theme.spacing(2),
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: theme.palette.secondary.main,
            },
            '&:hover fieldset': {
                borderColor: theme.palette.secondary.dark,
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.primary.main,
            },
        },
    },
    button: {
        marginTop: theme.spacing(2),
        width: '100%',
        backgroundColor: theme.palette.secondary.main,
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        },
        transition: 'background-color 0.3s ease',
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
                <Typography variant="h4" align="center" className={classes.title}>
                    Contact Us
                </Typography>
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
                                className={classes.textField}
                                variant="outlined"
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
                                className={classes.textField}
                                variant="outlined"
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
                                className={classes.textField}
                                variant="outlined"
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
                                className={classes.textField}
                                variant="outlined"
                            />
                        </Grid>

                        {/* Submit Button */}
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                className={classes.button}
                            >
                                Send Message
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>

            {/* Snackbar for submission confirmation */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // Positioning the Snackbar
            >
                <Alert onClose={handleCloseSnackbar} severity="success">
                    Your message has been sent successfully!
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default Contact;
