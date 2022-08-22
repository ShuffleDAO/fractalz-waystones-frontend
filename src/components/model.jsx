import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    height: '350px',
  },
};

Modal.setAppElement('#root');

export default function Model(props) {
  const { setIsModelOpen, isModelOpen, text } = props;

  return (
    <div>
      <Modal
        isOpen={isModelOpen}
        style={customStyles}
        contentLabel="text"
      >
        <div className='close-wrapper'>
          <button className="close-btn" onClick={() => setIsModelOpen(false)}></button>
        </div>
        <p className='model-text'>{text}</p>
      </Modal>
    </div>
  );
}