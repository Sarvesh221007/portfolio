// src/components/layout/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaFilePdf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Contact & Resume */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <p className="mb-2">
            <FaEnvelope className="inline mr-2" />
            <a
              href="mailto:sarveshsingh8303744279@gmail.com"
              className="hover:text-blue-600"
            >
              sarveshsingh8303744279@gmail.com
            </a>
          </p>
          <p className="mb-2">
            <FaPhone className="inline mr-2" />
            <a href="tel:+918303744279" className="hover:text-blue-600">
              +91-8303744279
            </a>
          </p>
          <p className="mb-2">
            <FaFilePdf className="inline mr-2" />
            <a
              href="https://drive.google.com/file/d/105M6iBMLsKyqsIZN-VdEpZaAlffGdDqu/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              Download Resume
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/Sarvesh221007?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sarveshkumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Sarvesh Kumar Singh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
