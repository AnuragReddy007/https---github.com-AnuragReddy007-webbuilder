import React from "react";
import '../index.css';

// Header Component
const Header = ({ logoText, links }) => {
  return (
    <header className="header">
      <div className="header-logo">{logoText}</div>
      <nav className="header-nav flex space-x-4">
        {links.map((link, index) => (
          <a key={index} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

// Main Content Component
const MainContent = ({ title, description, children }) => {
  return (
    <main className="main-content">
      <div className="main-box">
        <h1 className="main-title">{title}</h1>
        <p className="main-description">{description}</p>
        {children}
      </div>
    </main>
  );
};

// Footer Component
const Footer = ({ footerText }) => {
  return (
    <footer className="footer">
      <p>{footerText}</p>
    </footer>
  );
};

// Image Gallery Component
const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="image-gallery-item">
          <img src={image.src} alt={image.alt} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
};

// Home Component
const Home = ({
  logoText = "Logo",
  links = [],
  mainTitle = "Welcome to WebBuilder",
  mainDescription = "Start building your website by entering a prompt below.",
  footerText = "© 2024 WebBuilder",
  images = [],
  children,
}) => {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      <Header logoText={logoText} links={links} />
      <MainContent title={mainTitle} description={mainDescription}>
        <button
          className="main-button"
          onClick={() => (window.location.href = "#prompt-section")}
        >
          Get Started
        </button>
        <ImageGallery images={images} />
        {children}
      </MainContent>
      <Footer footerText={footerText} />
    </div>
  );
};

export default Home;
