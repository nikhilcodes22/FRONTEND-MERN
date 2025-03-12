// ParentComponent.js
import React from 'react';
import { useStore } from './store';
import EditUserModal from './EditUser';

function ParentComponent() {
  const users = useStore((state) => state.users);
  const openPopup = useStore((state) => state.openPopup);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>User List</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Office</th>
            <th>Number</th>
            <th>Email</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.office}</td>
              <td>{user.number}</td>
              <td>{user.email}</td>
              <td>
                {/* You can replace the text with an icon if you prefer */}
                <button onClick={() => openPopup(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render the popup modal */}
      <EditUserModal />
    </div>
  );
}

export default ParentComponent;
