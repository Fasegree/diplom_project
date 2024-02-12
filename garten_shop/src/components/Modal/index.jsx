// Modal.js
import React from 'react';
import s from './Modal.module.css';

const Modal = ({ onClose, children }) => {
    return (
        <div className={s.modalOverlay}>
            <div className={s.modalContent}>
            
                <button className={s.closeButton} onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;