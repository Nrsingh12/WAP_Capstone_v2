import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Shopping Cart with Product Quantities</p>
        <p>Created as a React Capstone Project</p>
      </div>
    </footer>
  );
}

export default Footer;
