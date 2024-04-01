import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Snackbar, Alert } from '@mui/material';
import emailjs from 'emailjs-com';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to manage the visibility of the confirmation message
  const [showConfirmation, setShowConfirmation] = useState(false);

  const isValidEmail = email => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required.';
    if (!formData.email.trim()) errors.email = 'Email is required.';
    else if (!isValidEmail(formData.email)) errors.email = 'Email is not valid.';
    if (!formData.message.trim()) errors.message = 'Message is required.';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setFormErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log(formData);
      emailjs.send('service_qkconsi', 'template_wqv98dj', formData, 'BH4AkznfCEsRXHQkF')
      .then((result) => {
          console.log(result.text);
          setShowConfirmation(true); // Show confirmation message
          setFormData({ name: '', email: '', message: '' });
      }, (error) => {
          console.log(error.text);
      });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      p: 4,
      boxSizing: 'border-box'
    }}>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            fullWidth
            required
            error={!!formErrors.name}
            helperText={formErrors.name}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            fullWidth
            required
            error={!!formErrors.email}
            helperText={formErrors.email}
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            fullWidth
            required
            multiline
            rows={4}
            error={!!formErrors.message}
            helperText={formErrors.message}
          />
          <Button type="submit" variant="contained" color="primary">
            Send Message
          </Button>
        </form>
      </Container>
      <Snackbar
        open={showConfirmation}
        autoHideDuration={6000}
        onClose={() => setShowConfirmation(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setShowConfirmation(false)} severity="success" sx={{ width: '100%' }}>
          Your message has been sent successfully, we'll get back to you shortly!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default GetInTouch;
