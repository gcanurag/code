import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Notices from './Notices';


const Card = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
 

  const notices = [
    {
      id: 1,
      title: 'Important Notice 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Important Notice 2',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      title: 'Important Notice 3',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 4,
      title: 'Important Notice 4',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 5,
      title: 'Important Notice 5',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 6,
      title: 'Important Notice 6',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 7,
      title: 'Important Notice 7',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 8,
      title: 'Important Notice 8',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  
  
 
  return (
    
    <>

    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-300 to-pink-300">
    {/* Notices Section with Dropdown */}
    <section id="notices" className="container mx-auto p-8 relative">
      {/* Dropdown icon and Notices heading */}
      <div
        onClick={toggleDropdown}
        className="flex items-center cursor-pointer relative"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
        <h2 className="text-2xl font-bold mb-4 text-purple-800">Notices</h2>
      </div>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white border border-gray-300 p-2 rounded shadow z-10">
          {/* Dropdown links or contents */}
          {notices.map((notice) => (
            <div key={notice.id} className="py-2">
              <h3 className="text-md font-bold text-purple-800">{notice.title}</h3>
              <p className="text-gray-700">{notice.content}</p>
            </div>
          ))}
          {/* "See More" button */}
          <Link to="/notices">
            <button className="bg-purple-800 text-white px-4 py-2 rounded-full hover:bg-purple-700">
              See More...
            </button>
          </Link>
        </div>
      )}

      {/* Grid layout for notices */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isDropdownOpen &&
          notices.map((notice) => (
            <div key={notice.id} className="bg-white rounded-lg shadow-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-purple-800">{notice.title}</h3>
              <p className="text-gray-700">{notice.content}</p>
            </div>
          ))}
      </div>
    </section>
  </div>
  </>
  );
};

export default Card;
