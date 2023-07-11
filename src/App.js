import React, {useEffect} from 'react';

import { Routes, Route } from 'react-router-dom';
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { userData } from './data/userData';

import { ipAddress } from './apis/ipCollection';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ContinueFormModal from './components/ContinueFormModal';

import LandingPage from './pages/LandingPage';
import BusinessAddress from './questions/BusinessAddress';
import TruckingAddres from './questions/TruckingAddress';
import CurrentInsurance from './questions/CurrentInsurance';
import PolicyStartDate from './questions/PolicyStartDate';
import DOTNumber from './questions/DOTNumber';
import { useState } from 'react';

const App = () => {


  const [showModal, setShowModal] = useState(false);

  useEffect(() => {

    console.log(userData)

    const formCompleted = localStorage.getItem('formCompleted');
    if (formCompleted === 'true') {
      localStorage.removeItem('formCompleted');
    }
  }, [])

  return (
    <div>
    <NavBar />
    <ToastContainer limit={1} position='bottom-left' theme='colored' />
    
    <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/business-address' element={<BusinessAddress />} />
        <Route path='/trucking-address' element={<TruckingAddres />} />
        <Route path='/current-insurance' element={<CurrentInsurance />} />
        <Route path='/policy-start' element={<PolicyStartDate />} />
        <Route path='/dot-number' element={<DOTNumber />} />
    </Routes>

      <Footer />
      {showModal && <ContinueFormModal />}
  </div>
  )
}

export default App