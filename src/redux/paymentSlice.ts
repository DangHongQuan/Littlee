import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PaymantData {
  card: string;
  nameCard: string;
  dataEx: string;
  cvv: string;
  moneyPM: string;
  quantityPM: string;
  dataPM: string;
  contactPM: string;
  phonePM: string;
  emailPM: string;

}

interface PaymantState {
  PaymantatData: PaymantData[];
  isLoading: boolean;
  error: string | null;
}

const initialState: PaymantState = {
  PaymantatData: [],
  isLoading: false,
  error: null,
};

const ContactsSlice = createSlice({
  name: "Paymant",
  initialState,
  reducers: {
    fetchDatePaymantStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchContactPaymantSuccess(state, action: PayloadAction<PaymantData[]>) {
      state.isLoading = false;
      state.PaymantatData = action.payload;
    },
    fetchContactPaymantFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDatePaymantStart,
  fetchContactPaymantSuccess,
  fetchContactPaymantFailure,
} = ContactsSlice.actions;

export default ContactsSlice.reducer;
