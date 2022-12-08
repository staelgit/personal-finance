import { createSlice } from '@reduxjs/toolkit';
import operationService from '../services/operation.service';
import isOutdated from '../utils/isOutdated';

const operationSlice = createSlice({
   name: 'operations',
   initialState: {
      entities: null,
      isLoading: false,
      error: null,
      lastFetch: null
   },
   reducers: {
      requested: (state) => {
         state.isLoading = true;
      },
      received: (state, action) => {
         state.entities = action.payload;
         state.lastFetch = Date.now();
         state.isLoading = false;
      },
      requestFiled: (state, action) => {
         state.error = action.payload;
         state.isLoading = false;
      }
   }
});

const { reducer: operationsReducer, actions } = operationSlice;
const { requested, received, requestFiled } = actions;

export const loadOperationsList = () => async (dispatch, getState) => {
   console.log('dispatch loadOperationsList');
   const { lastFetch } = getState().operations;
   if (isOutdated(lastFetch)) {
      dispatch(requested());
      try {
         const { content } = await operationService.get();
         dispatch(received(content));
      } catch (error) {
         dispatch(requestFiled(error.message));
      }
   }
};

export const getOperations = () => (state) => state.operations.entities;
export const getOperationsLoadingStatus = () => (state) =>
   state.operations.isLoading;
export const getOperationsByIds = (operationsIds) => (state) => {
   if (state.operations.entities) {
      const operationsArray = [];
      for (const opId of operationsIds) {
         for (const operation of state.operations.entities) {
            if (operation._id === opId) {
               operationsArray.push(operation);
               break;
            }
         }
      }
      return operationsArray;
   }
   return [];
};

export default operationsReducer;
