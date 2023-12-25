import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa'; // Assuming you have installed react-icons

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-4 text-center">
      <div className="flex justify-around">
        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>

          <a href="https://twitter.com/your-twitter-account" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
        </div>

        {/* Address */}
        <div>
          <a
            href="https://www.google.com/maps/place/Your+Company+Address"
            target="_blank"
            rel="noopener noreferrer"
          >
            Your Company Address
          </a>
        </div>

        {/* Navigation Links */}
        <div>
          <div>
            <a href="/about-us">About Us</a>
          </div>
          <div>
            <a href="/contact-us">Contact Us</a>
          </div>
          <div>
            <a href="/our-services">Our Services</a>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div>
        <p>Connecting people with resources.</p>
        <p>&copy; 2023 CIVIC-CONNECT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
