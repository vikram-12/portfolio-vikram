// src/components/common/Footer.js (Bootstrap Footer)
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">
          &copy; {currentYear} My Portfolio. All rights reserved.
        </p>
        <div className="social-links small">
          <a href="https://linkedin.com" className="text-info mx-2">
            LinkedIn
          </a>{" "}
          |
          <a href="https://github.com" className="text-info mx-2">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
