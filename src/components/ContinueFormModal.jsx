import React, { useEffect } from 'react';
import Modal from 'react-modal';
import '../styles/forms.css'
import { userData } from '../data/userData';
import Lottie from "lottie-react";
import welcomeBack from '../assets/welcomeBack.json'
import { useNavigate, useLocation } from 'react-router';


Modal.setAppElement('#root');

export default function ContinueFormModal({ showModal, setShowModal }) {


  const navigate = useNavigate();
  const urlLeftOn = userData.url;
  const location = useLocation();
    
  useEffect(() => {
    if (Object.keys(userData).length !== 0) {
      setShowModal(true);
    }

    if (location.pathname === '/submit' || location.pathname === '/thank-you') {
      setShowModal(false);
    }
    
  }, [location]);

  const closeModal = () => {
    setShowModal(false);
  
    navigate('/');
  };



  return (
    <Modal
      isOpen={showModal}
      onRequestClose={closeModal}
      contentLabel="Form Continuation Modal"
      className="fixed inset-0 flex items-center justify-center rounded-lg"
      overlayClassName="fixed inset-0 bg-black bg-opacity-80"
    >
      <div className="flex flex-col justify-between max-w-lg p-4 mx-auto text-center text-white rounded-lg bg-input-purple">
        <h2 className="mb-2 text-2xl font-bold">Welcome back!</h2>
        <Lottie animationData={welcomeBack} style={{height: 300}} loop={true} />
        <p className="mb-4 font-sans font-bold ">It looks like you've already completed part of the form. You can continue where you left off or start over!</p>
        <div className='mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3'>
          <button onClick={closeModal} className="px-4 py-2 text-white rounded bg-input-purple">Start Over</button>
          <button onClick={() => {
            closeModal();
            navigate(urlLeftOn);
          }} className="px-4 py-2 text-white rounded bg-button-purple">Continue</button>
        </div>
      </div>
    </Modal>
  );
}
