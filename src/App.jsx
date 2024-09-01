import React from 'react';
import Home from './Component/home';

const App = () => {
  // Navigation links
  const links = [
    { href: '#build', label: 'Build from Scratch' },
    { href: '#projects', label: 'Old Projects' },
    { href: '#contact', label: 'Contact' },
    { href: '#login', label: 'Login' },
  ];

  // Example images for the gallery
  const images = [
    { src: 'path-to-image-1.jpg', alt: 'Example of app working 1' },
    { src: 'path-to-image-2.jpg', alt: 'Example of app working 2' },
    { src: 'path-to-image-3.jpg', alt: 'Example of app working 3' },
    { src: 'path-to-image-4.jpg', alt: 'Example of app working 4' },
  ];

  return (
    <div>
      <Home
        logoText="WebBuilder"
        links={links}
        mainTitle="Welcome to WebBuilder"
        mainDescription="Start building your website by a simple prompt below."
        mainDescription2 = "Here's how our website builder does the job"
        footerText="© 2024 WebBuilder"
        images={images}
      />
      {/* Additional content or routes */}
      <div id="prompt-section">
        {/* Your prompt input and generation section */}
      </div>
    </div>
  );
};

export default App;
