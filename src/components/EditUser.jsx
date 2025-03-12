// EditUserModal.js
import React, { useState, useEffect } from 'react';
import { useStore } from './store';

function EditUserModal() {
  const popupOpen = useStore((state) => state.popupOpen);
  const currentUser = useStore((state) => state.currentUser);
  const closePopup = useStore((state) => state.closePopup);
  const updateUser = useStore((state) => state.updateUser);

  // Local state to control form inputs
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    office: '',
    number: '',
    email: ''
  });

  // When the currentUser changes, update the form data
  useEffect(() => {
    if (currentUser) {
      setFormData(currentUser);
    }
  }, [currentUser]);

  if (!popupOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
  };

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>
        <h3>Edit User</h3>
        <form onSubmit={handleSubmit}>
          <div style={modalStyles.field}>
            <label>Name:</label>
            <input name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div style={modalStyles.field}>
            <label>Office:</label>
            <input name="office" value={formData.office} onChange={handleChange} />
          </div>
          <div style={modalStyles.field}>
            <label>Number:</label>
            <input name="number" value={formData.number} onChange={handleChange} />
          </div>
          <div style={modalStyles.field}>
            <label>Email:</label>
            <input name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <button type="submit">Save</button>
            <button type="button" onClick={closePopup} style={{ marginLeft: '1rem' }}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    width: '400px',
  },
  field: {
    marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'column'
  }
};

export default EditUserModal;
