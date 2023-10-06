// reducers/index.js

import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer, // You can add more reducers here
});

export default rootReducer;
