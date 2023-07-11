import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { userData } from '../data/userData';

Modal.setAppElement('#root');

export default function ContinueFormModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {

    console.log('lodaded', userData)
    // Check if userData is not empty
    if (Object.keys(userData).length !== 0) {
      setShowModal(true);
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={closeModal}
      contentLabel="Form Continuation Modal"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div>
        <h2 className="modal-title">Welcome back!</h2>
        <p>
          It looks like you've already completed part of the form. You can continue where you left off.
        </p>
        {/* Additional content and actions */}
        <button onClick={closeModal} className="modal-close-button">
          Close
        </button>
      </div>
    </Modal>
  );
}