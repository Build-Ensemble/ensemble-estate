// LandingPage.js

import React, {useState, useEffect } from 'react';
import { Box, Grid, Typography, Button, Chip } from '@mui/material';
import next36 from './assets/next-logo.png';


import Shape from './Shape';
import Typewriter from 'typewriter-effect';

const LandingPage = () => {
    // const [activeShape, setActiveShape] = useState(-1); // Start before the first shape
    const scrollToBottom = () => {
        window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth', // Enables smooth scrolling
        });
    };
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const colors = ['#8A2BE2', '#BA55D3', '#9400D3', '#9932CC']; // Example colors for the shapes
    return (
        <Grid container sx={{ height: '100vh' }} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 4 }}>
                <Box sx={{ textAlign: 'left' }}>
                <Typography
                    variant="h2"
                    component="h1"
                    height="30%"
                    width="60%"
                    gutterBottom
                    sx={{
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' }, // Adjust font sizes for different screen widths
                    }}
                    >
                    <Typewriter
                            options={{
                                strings: ['Streamlined Real-Estate Management'],
                                autoStart: true,
                                loop: false,
                                delay: 20,
                                deleteSpeed: Infinity,
                                cursor: ''
                            }}
                        />
                    </Typography>
                    <Typography 
                        variant="h5" 
                        gutterBottom
                        sx={{
                            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, // Smaller text scales down on smaller screens
                        }}
                    >
                        Automate your document processing, driven by AI. We help real-estate developers be more productive by simplifying their projects and portfolio.
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left', gap: 2 }}>
                        <Button
                            onClick={scrollToBottom}
                            variant="contained"
                            color="primary"
                            sx={{
                            mt: 2, // Adds margin-top of 16px (2 * theme spacing unit which is usually 8px)
                            alignSelf: 'center', // Centers the button when the parent is a flex container
                            }}
                        >
                            Get In Touch!
                        </Button>
                        <a href="https://www.nextcanada.com/" target="_blank" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center', // Center the custom chip horizontally
                                alignItems: 'center', // Center items vertically within the chip
                                mt:2.25,
                                px: 2, // Horizontal padding
                                py: 0.5, // Vertical padding, adjust as needed
                                border: '1px solid', // Border to resemble the outlined variant of Chip
                                borderColor: 'grey.400', // Border color
                                borderRadius: '16px', // Pill shape
                                fontSize: '0.75rem', // Text size
                                width: 'auto', // Adjust width as necessary
                                maxWidth: 'fit-content', // Ensure the box only takes as much space as its content
                            }}>
                            <Typography>
                                Backed by
                            </Typography>
                            <Box component="img" src={next36} alt="Next Canada" sx={{ height: '12px', m: 1 }} />
                            </Box>
                        </a>
                        </Box>
                    
                </Box>
            </Grid>

            <Grid item 
                xs={12} md={6} sx={{ 
                    height: '100%', 
                    alignContent: { xs: 'baseline', md: 'center'}
                }} >
                <Box 
                    sx={{ 
                        position: 'relative', 
                        height: '330px', 
                        display: 'flex', 
                        justifyContent: 'space-evenly',
                        // justifyContent: { xs: 'flex-start', md: 'center'}, 
                        alignItems: 'flex-end' 
                    }}
                    >
                        {colors.map((color, index) => (
                        <Shape 
                            key={index} 
                            color={color} 
                            baseHeight={100 + index * 50} 
                            delay={getRandomNumber(2000, 6000)}
                        />
                        ))}
                </Box>

            </Grid>

        </Grid>
    );
};

export default LandingPage;
