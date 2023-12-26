import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "./lib/cookieGetterSetter";


function Profilepage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  async function loginUser(ev) {
    ev.preventDefault();
    // console.log(ev),"ev";
    try {
      const { data } = await axios.post("/login", { email, password });
      // console.log(data);
      if (data.authtoken) {
        alert("Login successful");
        setCookie("storedAuthtoken", data.authtoken, 7);  
        setName("");
        setPassword("");
        navigate("/home");
        setUser(user);
      }

    } catch (e) {
      alert("Login failed. Please try again later");
      console.log(e);
    }
  }

  // if (redirect) {
  //   return <Navigate to={"/"} />;
  // }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-100 via-purple-300 to-pink-300 p-8">
      <div className="bg-purple-600 p-8 rounded-lg shadow-lg flex w-4/5">
        {" "}
        {/* Adjust the width to cover 90% */}
        <div className="w-1/2 pl-4">
          {" "}
          {/* Inner card takes half of the width, adjust padding-left (pl) for spacing */}
          {/* Inner card content */}
        </div>
        <div className="w-1/2 pr-4">
          {" "}
          {/* Outer card takes half of the width, adjust padding-right (pr) for spacing */}
          <div className="bg-white p-6 rounded-lg mb-4">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            {/* Add login form components here */}
            <form onSubmit={loginUser}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Username:
                </label>
                <input
                  className="border rounded px-3 py-2 w-full"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password:
                </label>
                <input
                  className="border rounded px-3 py-2 w-full"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                className="bg-purple-800 text-white px-4 py-2 rounded-full hover:bg-purple-700"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profilepage;
