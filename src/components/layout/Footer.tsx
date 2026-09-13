import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-muted">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          <p className="mt-2">
            Built with <span className="text-accent">❤️</span> using React, Vite, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;