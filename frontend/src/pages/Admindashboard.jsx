import React, { useCallback, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';

import { Link } from 'react-router-dom';



const Admindashboard = () => {
  // let newData = [];
  const [complain, setComplain] = useState([]);
  const getComplainsfromServer = useCallback(async () => {
    const {data} = await axios.get('/issueComplain');
    const details = data.data;
    await setComplain((newData) => [...newData, ...details]);
    console.log(data.data, "data");
    console.log(complain.length);
  }, []);

  useEffect(() => {
    getComplainsfromServer();
  }, []);


    return (
        <>
          <Navbar />
          <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-300 to-pink-300">
            {/* Notices Section */}
            <section id="notices" className="container mx-auto p-8">
              <h2 className="text-2xl font-bold mb-4 text-purple-800">Dashboard</h2>
              {/* Grid layout for notices */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {complain.map((item) => (
                  <div key={item._id} className="bg-white rounded-lg shadow-xl p-6">

                    <Link to={`/adminpage/${ item._id}/${item.title}/${item.description}/${item.email}`}> <h3 className="text-xl cursor-pointer font-bold mb-2 text-purple-800">{item.title}</h3></Link>
                    <p className="text-gray-700">{item.description.slice(0,30)+'..'}</p>

                  </div>
                ))}
              </div>
            </section>
          </div>
        </>
      );
    };


          

export default Admindashboard
