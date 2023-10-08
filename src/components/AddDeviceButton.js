import React, { useState } from 'react';

const styles = {
  addButton: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    backgroundColor: '#6F74C2',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    fontSize: '60px',
    cursor: 'pointer',
    outline: 'none',
  },
  popup: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContent: {
    background: '#fff',
    padding: '20px',
    borderRadius: '4px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
  popupContentH2: {
    marginBottom: '10px',
  },
  popupContentInput: {
    width: '90%',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonContainerButtonFirst: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    outline: 'none',
    backgroundColor: '#ccc',
    color: '#000',
  },
  buttonContainerButtonLast: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    outline: 'none',
    backgroundColor: '#6F74C2',
    color: '#fff',
  },
};

function AddDeviceButton() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newDeviceName, setNewDeviceName] = useState('');

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleDeviceNameChange = (e) => {
    setNewDeviceName(e.target.value);
  };

  const handleAddDevice = () => {
    console.log('New Device Name:', newDeviceName);
    setIsPopupOpen(false);
    setNewDeviceName('');
  };

  return (
    <div>
      <button style={styles.addButton} onClick={togglePopup}>
        +
      </button>

      {isPopupOpen && (
        <div style={styles.popup}>
          <div style={styles.popupContent}>
            <h2 style={styles.popupContentH2}>New Device Name</h2>
            <input
              type="text"
              placeholder="Enter device name"
              value={newDeviceName}
              onChange={handleDeviceNameChange}
              style={styles.popupContentInput}
            />
            <div style={styles.buttonContainer}>
                <button style={styles.buttonContainerButtonFirst} onClick={handleAddDevice}>Add Device</button>
                <button style={styles.buttonContainerButtonLast} onClick={togglePopup}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddDeviceButton;
