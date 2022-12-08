import { createSlice } from '@reduxjs/toolkit';
import categoryService from '../services/category.service';
import isOutdated from '../utils/isOutdated';

const categorySlice = createSlice({
   name: 'categories',
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

const { reducer: categoriesReducer, actions } = categorySlice;
const { requested, received, requestFiled } = actions;

export const loadCategoriesList = () => async (dispatch, getState) => {
   console.log('dispatch loadCategoriesList');
   const { lastFetch } = getState().categories;
   if (isOutdated(lastFetch)) {
      dispatch(requested());
      try {
         const { content } = await categoryService.get();
         dispatch(received(content));
      } catch (error) {
         dispatch(requestFiled(error.message));
      }
   }
};

export const getCategories = () => (state) => state.categories.entities;
export const getCategoriesLoadingStatus = () => (state) =>
   state.categories.isLoading;
export const getCategoriesByIds = (categoriesIds) => (state) => {
   if (state.categories.entities) {
      const categoriesArray = [];
      for (const catId of categoriesIds) {
         for (const category of state.categories.entities) {
            if (category._id === catId) {
               categoriesArray.push(category);
               break;
            }
         }
      }
      return categoriesArray;
   }
   return [];
};

export default categoriesReducer;
