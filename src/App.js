import React, {useEffect, useState} from 'react';

import { Routes, Route, Router } from 'react-router-dom';
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { userData } from './data/userData';

import { ipAddress } from './apis/ipCollection';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ContinueFormModal from './components/ContinueFormModal';
import { loadUserDataFromLocalStorage } from './data/addToUserData';
import LandingPage from './pages/LandingPage';
import BusinessAddress from './questions/BusinessAddress';
import TruckingAddres from './questions/TruckingAddress';
import CurrentInsurance from './questions/CurrentInsurance';
import PolicyStartDate from './questions/PolicyStartDate';
import DOTNumber from './questions/DOTNumber';
import BusinessDuration from './questions/BusinessDuration';
import TrucksTrailers from './questions/TrucksTrailers';
import BusinessName from './questions/BusinessName';
import BusinessType from './questions/BusinessType';
import BusinessContact from './questions/BusinessContact';
import Submit from './pages/Submit';
import ThankYou from './pages/ThankYou';

const App = () => {


  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadUserDataFromLocalStorage();
  
    const formCompleted = localStorage.getItem('formCompleted');
    if (formCompleted === 'true') {
      localStorage.removeItem('formCompleted');
    }
  
    // Check if userData is not empty
    if (Object.keys(userData).length !== 0) {
      setShowModal(true);
    }
  }, [setShowModal]);
  

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
        <Route path='/business-duration' element={<BusinessDuration />} />
        <Route path='/trucks-trailers' element={<TrucksTrailers />} />
        <Route path='/business-name' element={<BusinessName />} />
        <Route path='/business-type' element={<BusinessType />} />
        <Route path='/contact' element={<BusinessContact />} />
        <Route path='/submit' element={<Submit />} />
        <Route path='/thank-you' element={<ThankYou />} />

    </Routes>

      <Footer />

      {showModal && <ContinueFormModal showModal={showModal} setShowModal={setShowModal} />}
  </div>
  )
}

export default App