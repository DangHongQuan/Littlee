import { combineReducers } from '@reduxjs/toolkit';

import eventSlice from './eventSlice'
import titketSlice from './titketSlice';
import paymentSlice from './paymentSlice';

const rootReducer = combineReducers({

  event: eventSlice,
  titket: titketSlice,
  paymant: paymentSlice
 
});

export default rootReducer;
