import React, {useEffect} from 'react';

import { Routes, Route } from 'react-router-dom';
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { userData } from './data/userData';

import { ipAddress } from './apis/ipCollection';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import LandingPage from './pages/LandingPage';
import BusinessAddress from './questions/BusinessAddress';

const App = () => {
  return (
    <div>
    <NavBar />
    <ToastContainer limit={1} position='bottom-left' theme='colored' />
    
    <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/business-address' element={<BusinessAddress />} />
    </Routes>

    <Footer/>
  </div>
  )
}

export default App