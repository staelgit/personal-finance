import { combineReducers, configureStore } from '@reduxjs/toolkit';
import messageReducer from './messageSlice';
import authReducer from './authSlice';

const rootReducer = combineReducers({
   auth: authReducer,
   message: messageReducer
});

export function createStore() {
   return configureStore({
      reducer: rootReducer
   });
}
