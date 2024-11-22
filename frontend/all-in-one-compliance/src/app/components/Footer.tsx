import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-cyan-700 text-white py-4 fade-in">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p>&copy; 2024 Precogs.ai All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-cyan-200" aria-label="Facebook">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-cyan-200" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-cyan-200" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
