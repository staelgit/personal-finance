import { combineReducers, configureStore } from '@reduxjs/toolkit';
import messageReducer from './messageSlice';
import authReducer from './authSlice';
import accountsReducer from './accounSlice';

const rootReducer = combineReducers({
   auth: authReducer,
   message: messageReducer,
   accounts: accountsReducer
});

export function createStore() {
   return configureStore({
      reducer: rootReducer
   });
}
