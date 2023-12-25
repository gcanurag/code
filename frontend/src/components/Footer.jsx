import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa'; // Assuming you have installed react-icons
import { Link } from 'react-router-dom';

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
        <div className='flex'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>

          <a
            href="https://www.google.com/maps/place/Institute+of+Engineering,+Pulchowk+Campus/@27.6810958,85.3159199,17z/data=!4m14!1m7!3m6!1s0x39eb19cbf6b89eb7:0x951b3c8ac733e3ec!2sInstitute+of+Engineering,+Pulchowk+Campus!8m2!3d27.6810911!4d85.3184948!16s%2Fg%2F11c494jtbg!3m5!1s0x39eb19cbf6b89eb7:0x951b3c8ac733e3ec!8m2!3d27.6810911!4d85.3184948!16s%2Fg%2F11c494jtbg?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
           Pulchowk, Lalitpur Nepal
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
  <div>
    <p>&copy; 2023</p>
    <div>
      <Link to='/'><p>CIVIC-CONNECT</p></Link>
    <p>All rights reserved.</p></div>
  </div>
</div>

    </footer>
  );
};

export default Footer;
