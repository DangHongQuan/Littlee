import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DataTitket {
    ticketType: string;
  quantity: string;
  data: string;
  name: string;
  phone: string;
  email: string;

}

interface TitketState {
  dataTitket: DataTitket[];
  isLoading: boolean;
  error: string | null;
}

const initialState: TitketState = {
  dataTitket: [],
  isLoading: false,
  error: null,
};

const TitketsSlice = createSlice({
  name: "Titkets",
  initialState,
  reducers: {
    fetchDateTitketStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchDataTitketSuccess(state, action: PayloadAction<DataTitket[]>) {
      state.isLoading = false;
      state.dataTitket = action.payload;
    },
    fetchDataTitketFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDateTitketStart,
  fetchDataTitketSuccess,
  fetchDataTitketFailure,
} = TitketsSlice.actions;

export default TitketsSlice.reducer;
