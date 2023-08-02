import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DataEvent {
  name: string;
  title: String;
  data: String;
  money: String;
  img1: string;
  img2: string;
  img3: string;
  title1: String;
  title2: String;
  title3: String;

}

interface EventState {
  dataEvent: DataEvent[];
  isLoading: boolean;
  error: string | null;
}

const initialState: EventState = {
  dataEvent: [],
  isLoading: false,
  error: null,
};

const EventsSlice = createSlice({
  name: "Events",
  initialState,
  reducers: {
    fetchDateEventStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchDataEventSuccess(state, action: PayloadAction<DataEvent[]>) {
      state.isLoading = false;
      state.dataEvent = action.payload;
    },
    fetchDataEventFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDateEventStart,
  fetchDataEventSuccess,
  fetchDataEventFailure,
} = EventsSlice.actions;

export default EventsSlice.reducer;
