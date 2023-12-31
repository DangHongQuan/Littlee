import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rootReducer from './rootReduce';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Thêm các middleware khác nếu cần
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
