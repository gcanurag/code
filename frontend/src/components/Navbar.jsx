import React, { useContext, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import UserContext from "../UserContext";
import { getCookie } from "../lib/cookieGetterSetter";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  // const { ready, user, setUser } = useContext(UserContext);
  // console.log(ready, user, setUser, "hereisit");
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const fetchdata = async () => {
        const cookie = getCookie("storedAuthtoken");

        const { data } = await axios.get(`/profile`, {
          headers: {
            "auth-token": cookie,
          },
        });

        setReady(true);
        setUser(data.user.name);
        // console.log(user);
      };
      fetchdata();
    } catch (error) {
      console.log(error, "error");
    }
  }, [user]);

  const logout = async () => {
    try {
    await Promise.all(
      document.cookie.split(";").map((cookie) => {
        const trimmedCookie = cookie.replace(/^ +/, "");
        const [name, value] = trimmedCookie.split("=");
        return document.cookie = `${name}=;expires=${new Date(0).toUTCString()};path=/`;
      })
    );

      setTimeout(() => {
        console.log("Cookies cleared");
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="relative flex pl-10 pr-10 justify-between items-center bg-blue-900 h-20 ">
      <Link to="/"  className='text-white font-bold text-3xl'>CIVIC-CONNECT</Link>
      <div className=" relative flex w-72 size ">
        <CiSearch className="absolute text-3xl cursor-pointer pl-1" />
        <input
          type="text"
          placeholder="Search"
          className="  bg-neutral-100 rounded w-72 h-8 pl-8"
        />
      </div>

      <div className="flex items-center justify-between space-x-20">
        {user ? (
          <>
          <div className="flex">
          <RxAvatar  className="text-white text-3xl"/>
            <div className="text-white font-bold">{user}</div>
          </div>
            <p className="cursor-pointer font-bold   text-white" onClick={logout}>
              Logout
            </p>
          </>
        ) : (
          <div className="flex items-center justify-between space-x-20">
            <Link className=" text-white font-bold" to={"/register"}>
              Create Account
            </Link>
            <Link className=" text-white font-bold" to={"/login"}>
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
