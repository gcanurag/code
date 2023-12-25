
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Gunaso from './pages/Gunaso'
import Sujhab from './pages/Sujhab'
import Registerpage from './Registerpage'
import Profilepage from './Profilepage'
import Form from './components/Form.jsx'
import axios from 'axios';
import Notices from './components/Notices'
import Admindashboard from './pages/Admindashboard'

axios.defaults.baseURL = 'http://localhost:3000'; 
axios.defaults.withCredentials=true;

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/form' element={<Form/>} />
      <Route path='/login' element={<Profilepage/>} />
      <Route path='/register' element={<Registerpage/>} />
      <Route path='/gunaso' element={<Gunaso/>} />
      <Route path='/sujhab' element={<Sujhab/>} />
      <Route path='/notices' element={<Notices/>} />
      <Route path='/adminpage' element={<Admindashboard/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
