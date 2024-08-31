import React from "react";

// Header Component
const Header = ({ logoText, links }) => {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-700">
      <div className="text-2xl">{logoText}</div>
      <nav className="flex space-x-4">
        {links.map((link, index) => (
          <a key={index} href={link.href} className="hover:text-gray-400">
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
    <main className="p-8">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h1 className="text-4xl mb-4">{title}</h1>
        <p className="mb-4">{description}</p>
        {children}
      </div>
    </main>
  );
};

// Footer Component
const Footer = ({ footerText }) => {
  return (
    <footer className="flex justify-center items-center p-4 border-t border-gray-700">
      <p>{footerText}</p>
    </footer>
  );
};

// Image Gallery Component
const ImageGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8">
      {images.map((image, index) => (
        <div key={index} className="bg-gray-700 rounded-lg overflow-hidden">
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
  mainDescription2 = "Here's how our website builder does the job",
  footerText = "© 2024 WebBuilder",
  images = [],
  children,
}) => {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      <Header logoText={logoText} links={links} />
      <MainContent title={mainTitle} description={mainDescription}>
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
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
