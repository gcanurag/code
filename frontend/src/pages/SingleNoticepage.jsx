import React from 'react'
import { useParams } from 'react-router-dom';

const SingleNoticepage = () => {
    const {title, content}=useParams();

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-300 to-pink-300">
      {/* Notices Section */}
      <section className="flex items-center justify-center h-screen">
        <div className="container mx-auto p-12">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md "> {/* Card Wrapper */}
            <h2 className="text-2xl font-bold mb-4 text-purple-800">{title}</h2>
            {/* Grid layout for notices */}
              <div className="bg-white rounded-lg  text-wrap  overflow-hidden shadow-xl p-6" >
                <h3 className="text-xl mb-2 text-purple-800">{content}</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default SingleNoticepage
