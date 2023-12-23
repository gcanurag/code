
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Gunaso from './pages/Gunaso'
import Sujhab from './pages/Sujhab'
import Registerpage from './Registerpage'
import Profilepage from './Profilepage'
import  axios  from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'; 
axios.defaults.withCredentials=true;

Home
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Profilepage/>} />
      <Route path='/register' element={<Registerpage/>} />
      <Route path='/gunaso' element={<Gunaso/>} />
      <Route path='/sujhab' element={<Sujhab/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
