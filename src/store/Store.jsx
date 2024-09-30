import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../Features/contacts/ContactSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});