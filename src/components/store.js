// store.js
import {create} from 'zustand';

export const useStore = create((set) => ({
  users: [
    { id: 1, name: "Alice", office: "HQ", number: "1234567890", email: "alice@example.com" },
    { id: 2, name: "Bob", office: "Remote", number: "0987654321", email: "bob@example.com" },
    // Add more users as needed
  ],
  popupOpen: false,
  currentUser: null,

  // Action to open the popup with the selected user's data
  openPopup: (user) => set({ popupOpen: true, currentUser: user }),

  // Action to close the popup
  closePopup: () => set({ popupOpen: false, currentUser: null }),

  // Action to update the user in the store and close the popup
  updateUser: (updatedUser) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      ),
      popupOpen: false,
      currentUser: null,
    })),
}));
