import React, { useState } from "react";
import { getCookie, setCookie } from "../lib/cookieGetterSetter";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Images = () => {
  const navigate = useNavigate();
  const cookie = getCookie("storedAuthtoken");

  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("title", title);

      const {data} = await axios.post("/uploadNotice", formData, {
        headers: {
          "auth-token": cookie,
          
        },
      });
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-100 via-purple-300 to-pink-300 p-8">
        <div className="bg-purple-600 p-8 rounded-lg shadow-lg flex flex-col items-center w-4/5">
          <div className="w-full mb-8">{/* Inner card content */}</div>
          <div className="w-full max-w-md mx-auto">
            <div className="bg-white p-6 rounded-lg mb-4 w-full">
              <h2 className="text-2xl font-bold mb-4">Complain Form</h2>
              {/* Add login form components here */}
              <form
                className="flex flex-col"
                method="post"
                encType="multipart/form-data"
              >
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    className="border rounded px-3 py-2 w-full"
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Enter your title"
                    onChange={(e)=>setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="description"
                  >
                    Upload your document:
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleFileChange}
                  />
                </div>
                <button
                  className="bg-purple-800 text-white px-4 py-2 rounded-full hover:bg-purple-700"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
