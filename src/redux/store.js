import { configureStore } from '@reduxjs/toolkit';
import { contactsAPI, myContactsSlice } from './myContactsSlice';

export const store = configureStore({
  reducer: {
    contacts: myContactsSlice.reducer,
    [contactsAPI.reducerPath]: contactsAPI.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsAPI.middleware,
  ],
});
