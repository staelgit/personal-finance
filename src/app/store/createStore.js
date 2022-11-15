import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersReducer from './users';
import messageReducer from './messageSlice';

const rootReducer = combineReducers({
   users: usersReducer,
   message: messageReducer
});

export function createStore() {
   return configureStore({
      reducer: rootReducer
   });
}
