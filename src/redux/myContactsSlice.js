import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const myContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addMyContact(state, action) {
      state.items.push(action.payload);
    },
    removeMyContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    filterMyContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addMyContact, removeMyContact, filterMyContacts } =
  myContactsSlice.actions;

export const persistedContactReducer = persistReducer(
  persistConfig,
  myContactsSlice.reducer
);

// Selectors

export const getContactsValue = state => state.contacts.items;
