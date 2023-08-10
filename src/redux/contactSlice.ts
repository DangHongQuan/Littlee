import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ContactData {
    name: string;
    email: string;
    phone: string;
    address: string;
    reminder: string;

}

interface ContactState {
  ContactData: ContactData[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ContactState = {
  ContactData: [],
  isLoading: false,
  error: null,
};

const ContactsSlice = createSlice({
  name: "Contacts",
  initialState,
  reducers: {
    fetchDateContactStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchContactDataSuccess(state, action: PayloadAction<ContactData[]>) {
      state.isLoading = false;
      state.ContactData = action.payload;
    },
    fetchContactDataFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDateContactStart,
  fetchContactDataSuccess,
  fetchContactDataFailure,
} = ContactsSlice.actions;

export default ContactsSlice.reducer;
