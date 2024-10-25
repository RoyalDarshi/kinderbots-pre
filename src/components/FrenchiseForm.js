import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
    Box,
    Typography,
    Button,
    TextField,
    MenuItem,
    Paper,
    Snackbar,
} from '@mui/material';
import { styled } from '@mui/system';
import MuiAlert from '@mui/material/Alert';

// Styled Components
const FormContainer = styled(Paper)(({ theme }) => ({
    maxWidth: '600px',
    margin: '40px auto',
    padding: '40px',
    backgroundColor: '#F7F9FB',
    borderRadius: '10px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',

    // Responsive Styles
    [theme.breakpoints.down('sm')]: {
        maxWidth: '90%', // Full width on mobile
        padding: '20px', // Less padding on mobile
    },
}));

const FormTitle = styled(Typography)(({ theme }) => ({
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#FF7043',
    marginBottom: '20px',
    textAlign: 'center',
    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.15)',

    // Responsive Styles
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.8rem', // Smaller title on mobile
    },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
    marginTop: '20px',
    backgroundColor: '#FF4081',
    color: '#fff',
    padding: '14px 32px',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    borderRadius: '50px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',

    '&:hover': {
        backgroundColor: '#F50057',
        transform: 'scale(1.05)',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
    },

    // Responsive Styles
    [theme.breakpoints.down('sm')]: {
        padding: '10px 20px', // Smaller padding on mobile
        fontSize: '1rem', // Smaller font size on mobile
    },
}));

const Alert = React.forwardRef((props, ref) => (
    <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const FranchiseForm = () => {
    const { control, handleSubmit, reset, formState: { errors } } = useForm();
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const onSubmit = (data) => {
        // Handle form submission logic here (e.g., send data to API)
        setOpenSnackbar(true); // Open the Snackbar alert
        reset(); // Reset the form fields to initial state
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false); // Close the Snackbar alert
    };

    return (
        <FormContainer>
            <FormTitle>Franchise Application</FormTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name Field */}
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Name is required' }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Full Name"
                            fullWidth
                            margin="normal"
                            error={!!errors.name}
                            helperText={errors.name ? errors.name.message : ''}
                        />
                    )}
                />

                {/* Email Field */}
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Email is required', pattern: /^\S+@\S+$/i }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Email"
                            fullWidth
                            margin="normal"
                            error={!!errors.email}
                            helperText={errors.email ? 'Enter a valid email address' : ''}
                        />
                    )}
                />

                {/* Phone Number Field */}
                <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: 'Phone number is required',
                        pattern: {
                            value: /^[0-9]+$/,
                            message: 'Enter a valid phone number',
                        },
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Phone Number"
                            fullWidth
                            margin="normal"
                            error={!!errors.phone}
                            helperText={errors.phone ? errors.phone.message : ''}
                        />
                    )}
                />

                {/* Location Field */}
                <Controller
                    name="location"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Location is required' }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Preferred Location"
                            fullWidth
                            margin="normal"
                            error={!!errors.location}
                            helperText={errors.location ? errors.location.message : ''}
                        />
                    )}
                />

                {/* Investment Range */}
                <Controller
                    name="investment"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Investment range is required' }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            select
                            label="Investment Range"
                            fullWidth
                            margin="normal"
                            error={!!errors.investment}
                            helperText={errors.investment ? errors.investment.message : ''}
                        >
                            <MenuItem value="Less than ₹50,00,000">Less than ₹50,00,000</MenuItem>
                            <MenuItem value="₹50,00,000 - ₹1,00,00,000">₹50,00,000 - ₹1,00,00,000</MenuItem>
                            <MenuItem value="₹1,00,00,000 - ₹1,50,00,000">₹1,00,00,000 - ₹1,50,00,000</MenuItem>
                            <MenuItem value="More than ₹1,50,00,000">More than ₹1,50,00,000</MenuItem>
                        </TextField>
                    )}
                />

                {/* Message Field */}
                <Controller
                    name="message"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Additional Information"
                            multiline
                            rows={4}
                            fullWidth
                            margin="normal"
                        />
                    )}
                />

                {/* Submit Button */}
                <SubmitButton type="submit" variant="contained" fullWidth>
                    Submit Application
                </SubmitButton>
            </form>

            {/* Snackbar for submission confirmation */}
            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert onClose={handleCloseSnackbar} severity="success">
                    Franchise application submitted successfully!
                </Alert>
            </Snackbar>
        </FormContainer>
    );
};

export default FranchiseForm;
