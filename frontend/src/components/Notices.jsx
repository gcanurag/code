import React from 'react';
import Navbar from '../components/Navbar';

const Notices = () => {
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
    },
    {
      id: 9,
      title: 'Important Notice 9',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 10,
      title: 'Important Notice 10',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 11,
      title: 'Important Notice 11',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },

    {
      id: 12,
      title: 'Important Notice 12',
      content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }

  ];

  return (
    <> 
     <Navbar/>
  

    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-300 to-pink-300">
      {/* Notices Section */}
      <section id="notices" className="container mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">Notices</h2>
        {/* Grid layout for notices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {notices.map((notice) => (
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

export default Notices;
