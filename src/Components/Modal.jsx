import react, { useState, useEffect } from 'react';
import '../App.css';

function Modal({ isOpen, onClose, children }) {
  const [modalStyle, setModalStyle] = useState({});

  useEffect(() => {
    if (!isOpen) {
      const pokemonList = document.getElementById('pokemonList');
      if (pokemonList) {
        const rect = pokemonList.getBoundingClientRect();
        setModalStyle({
          top: rect.top + window.scrollY,
          left: rect.left + window.scrollX,
        });
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
