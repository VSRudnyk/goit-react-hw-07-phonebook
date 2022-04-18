import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, largeImageURL }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className="Modal__backdrop" onClick={handleBackdropClick}>
      <div className="Modal__content">
        <img src={largeImageURL} alt="" />
      </div>
    </div>,
    modalRoot
  );
};
