import React from 'react';
import { AppBar, Toolbar, Typography, Box, useScrollTrigger, CssBaseline, Slide } from '@mui/material';
import LandingPage from './LandingPage';
// import GetInTouch from './GetInTouch';
import logo from './assets/ensemble-logo.png';
import Footer from './Footer';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{ overflow: 'hidden', height: '100vh' }}>
        <AppBar color="default" position="sticky">
          <Toolbar>
            <a href="https://www.ensemble.estate/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
              <Box component="img" sx={{ height: 32 }} src={logo} alt="Company Logo" />
              <Typography variant="h6" component="div" sx={{ marginLeft: 1 }}>
                Ensemble
              </Typography>
            </a>
          </Toolbar>
        </AppBar>
        <LandingPage />
        {/* <GetInTouch /> */}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
