import React from "react";
import logo from "../assets/logo2.png";

const Footer = () => {
  return (
    <footer className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">

          {/* Brand Logo */}
          <div className="mb-6 sm:mb-8">
            <img
              src={logo}
              alt="Ed-Buddy Logo"
              className="h-12 sm:h-14 md:h-16 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <nav className="mb-10 sm:mb-12">
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
              <li>
                <a href="#home" className="text-gray-800 hover:text-gray-600 transition-colors">
                  Home Page
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-800 hover:text-gray-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-800 hover:text-gray-600 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-800 hover:text-gray-600 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* Divider Line */}
          <hr className="w-full border-gray-300 mb-6 sm:mb-8" />

          {/* Copyright and Policy Links */}
          <div className="flex flex-col sm:flex-row justify-between items-center w-full text-sm text-gray-600 gap-2 sm:gap-0">
            <p className="text-center sm:text-left">
              © 2025 EduTech. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#privacy" className="hover:text-gray-800">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-gray-800">
                Terms of Use
              </a>
              <a href="#cookies" className="hover:text-gray-800">
                Cookie Preferences
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
