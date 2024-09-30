import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    editContact: (state, action) => {
      const { id, name, email, phone } = action.payload;
      const existingContact = state.contacts.find(
        (contact) => contact.id == id
      );
      if (existingContact) {
        existingContact.name = name;
        existingContact.email = email;
        existingContact.phone = phone;
      }
    },
  },
});

export const { addContact, removeContact, editContact } = contactsSlice.actions;

export default contactsSlice.reducer;