import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{ textAlign: 'center', padding: '20px', marginTop: '20px', backgroundColor: '#f0f0f0' }}>
      © {currentYear} Ensemble. All rights reserved.
    </footer>
  );
};

export default Footer;
