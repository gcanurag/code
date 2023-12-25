import React from 'react'
import Navbar from '../components/Navbar'

const Admindashboard = () => {
    const array = [
      
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
          <Navbar />
    
          <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-300 to-pink-300">
            {/* Notices Section */}
            <section id="notices" className="container mx-auto p-8">
              <h2 className="text-2xl font-bold mb-4 text-purple-800">Dashboard</h2>
              {/* Grid layout for notices */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {array.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-xl p-6">
                    <h3 className="text-xl font-bold mb-2 text-purple-800">{item.title}</h3>
                    <p className="text-gray-700">{item.content}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </>
      );
    };


          

export default Admindashboard
