import { configureStore, createSlice } from '@reduxjs/toolkit';

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

export const store = configureStore({
  reducer: {
    contacts: myContactsSlice.reducer,
  },
});
