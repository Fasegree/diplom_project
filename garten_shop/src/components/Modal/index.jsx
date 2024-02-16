// Modal.js
import React from 'react';
import s from './Modal.module.css';
import close from './media/closeWhite.png'

const Modal = ({ onClose, children }) => {
    return (
        <div className={s.modalOverlay}>
            <div className={s.modalContent}>
            
                <button className={s.closeButton} onClick={onClose}>
                    {/* &times; */}
                    <img src={close} alt="close" />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;