import { combineReducers } from '@reduxjs/toolkit';

import eventSlice from './eventSlice'
import titketSlice from './titketSlice';

const rootReducer = combineReducers({

  event: eventSlice,
  titket: titketSlice
 
});

export default rootReducer;
