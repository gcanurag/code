
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios';
import { Admin, Card, Complain, Footer, Form, Home, Images, Navbar, Notices, LogoutButton } from './components/index';
import { Admindashboard, Chautari, Landingpage, Profilepage, SingleNoticepage, Singlecomplain, Registerpage } from './pages/Pages'


axios.defaults.baseURL = 'http://localhost:3000'; 
axios.defaults.withCredentials=true;

function App() {
  return (
    
      <Routes>
      <Route path='/' element={<Landingpage/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/form' element={<Form/>} />
      <Route path='/login' element={<Profilepage/>} />
      <Route path='/register' element={<Registerpage/>} />
      {/* <Route path='/gunaso' element={<Gunaso/>} />
      <Route path='/sujhab' element={<Sujhab/>} /> */}
      <Route path='/notices' element={<Notices/>} />
      <Route path='/notices/:id/:title/:content' element={<SingleNoticepage/>} />
      <Route path='/adminpage' element={<Admindashboard/>} />
      <Route path='/adminpage/:id/:title/:description/:email' element={<Singlecomplain/>} />
      <Route path='/images' element={<Images/>} />
      </Routes>
    
  )
}

export default App
