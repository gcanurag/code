import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../lib/authStore/authSlice';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  }
  return (
    <button>Logout</button>
  )
}

export default LogoutButton