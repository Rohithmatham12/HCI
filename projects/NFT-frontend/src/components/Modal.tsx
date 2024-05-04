// src/components/Modal.tsx
import React from 'react';

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, children, onClose }) => {
  if (!open) return null;

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: 'rgba(0, 0, 0, 0.75)', 
      zIndex: 1000 
    }}>
      <div style={{ 
        position: 'relative', 
        width: '80%', // Adjust based on your table width
        minHeight: '60%', // Adjust based on your content needs
        backgroundColor: 'white', 
        borderRadius: '10px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        padding: '20px', 
        overflowY: 'auto', // Ensures scrolling if content is too long
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <button onClick={onClose} style={{ 
          position: 'absolute', 
          top: '10px', 
          right: '10px', 
          cursor: 'pointer' 
        }}>Close</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
