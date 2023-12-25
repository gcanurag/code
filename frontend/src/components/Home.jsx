import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Complain from './Complain'
import Footer from './Footer'
import Admin from './Admin'

const Home = () => {
  return (
    <>
      <Navbar />
      <Complain/>
      <Admin/>
      <Card />
      <Footer/>
      
    </>
  )
}

export default Home
