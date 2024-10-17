// src/components/EnrollmentForm.js
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

const Enrollment = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState({
        childName: '',
        parentName: '',
        email: '',
        phone: '',
        address: '',
        dateOfBirth: '',
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
            childName: '',
            parentName: '',
            email: '',
            phone: '',
            address: '',
            dateOfBirth: '',
        });
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Container className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant="h4" align="center">Enrollment Form</Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>

                        {/* Child's Name */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                required
                                label="Child's Name"
                                name="childName"
                                value={formData.childName}
                                onChange={handleChange}
                            />
                        </Grid>

                        {/* Parent's Name */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                required
                                label="Parent's Name"
                                name="parentName"
                                value={formData.parentName}
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

                        {/* Phone Number */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                required
                                type="tel"
                                label="Phone Number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </Grid>

                        {/* Address */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label="Address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                multiline
                                rows={2}
                            />
                        </Grid>

                        {/* Date of Birth */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                required
                                type="date"
                                label="Date of Birth"
                                name="dateOfBirth"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={formData.dateOfBirth}
                                onChange={handleChange}
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
                                Submit Enrollment
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>

            {/* Snackbar for submission confirmation */}
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success">
                    Enrollment form submitted successfully!
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default Enrollment;
