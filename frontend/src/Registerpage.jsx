
import React from 'react'
import axios from "axios";
import {useState}from 'react'

function Registerpage() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [identitynumber,setIdentitynumber] = useState('');

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post('/register', {
        name,
        email,
        password,
        identitynumber
      });
      alert('Registration successful. Now you can log in');
    } catch (e) {
      alert('Registration failed. Please try again later');
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-100 via-purple-300 to-pink-300 p-8">
      <div className="bg-purple-600 p-8 rounded-lg shadow-lg flex w-4/5"> {/* Adjust the width to cover 90% */}
        <div className="w-1/2 pl-4"> {/* Inner card takes half of the width, adjust padding-left (pl) for spacing */}
          {/* Inner card content */}
        </div>
        <div className="w-1/2 pr-4"> {/* Outer card takes half of the width, adjust padding-right (pr) for spacing */}
          <div className="bg-white p-6 rounded-lg mb-4">
            <h2 className="text-2xl font-bold mb-4">Create Account</h2>
            {/* Add login form components here */}
            <form onSubmit={registerUser}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username:
                </label>
                <input
                  className="border rounded px-3 py-2 w-full"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  onChange={ev => setName(ev.target.value)  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Email ID
                </label>
                <input
                  className="border rounded px-3 py-2 w-full"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your username"
                  onChange={ev => setEmail(ev.target.value)  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Identity Number
                </label>
                <input
                  className="border rounded px-3 py-2 w-full"
                  type="text"
                  id="password"
                  name="identity_number"
                  placeholder="Enter your identity number:"
                  onChange={ev => setIdentitynumber(ev.target.value)}
                />
              </div> 
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password:
                </label>
                <input
                  className="border rounded px-3 py-2 w-full"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={ev => setPassword(ev.target.value)}
                />
              </div>
              <button
                className="bg-purple-800 text-white px-4 py-2 rounded-full hover:bg-purple-700"
                type="submit"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerpage;