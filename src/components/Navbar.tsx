'use client';

import React from 'react';
// import Image from 'next/image'; // Uncomment this when the logo is available

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg glass-effect sticky-top p-3">
      <div className="container-fluid">
        {/* 
          PLACEHOLDER: Replace this with the Next.js Image component once the logo is added.
          <Image src="/Cyber-Valtorix-1.png" alt="Cyber Valtorix Logo" width={150} height={40} /> 
        */}
        <a className="navbar-brand fw-bold" href="#">Cyber Valtorix</a>
        
        <div className="d-flex align-items-center">
          <button onClick={toggleTheme} className="btn btn-outline-secondary me-2">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          {/* You can add other navbar items here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
