import React from 'react';
// import categoryService from '../services/category.service';
import { useSelector } from 'react-redux';
import { getCategories } from '../store/categorySlice';

const Expense = () => {
   const categories = useSelector(getCategories());
   console.log('categories from redux:', categories);
   /*   const getCategory = async () => {
      try {
         const { content } = await categoryService.get();
         console.log('content:', content);
         return content;
      } catch (e) {}
   };
      const createCategory = async () => {
      try {
         const { content } = await categoryService.create(
            { type: 'expense', title: 'Новая категория 2' },
            'newUserId1'
         );
         console.log('content from create category:', content);
         return content;
      } catch (e) {}
   }; */
   /*   const updateCategory = async () => {
      try {
         const { content } = await categoryService.update({
            userId: '5tEZi7fnscO19fbprmlMhKMwM6A3',
            _id: 'beKN0527xTQhFmo1d6tTi',
            title: 'ОТРЕДАКТИРОВАННАЯ новая категория 2'
         });
         console.log('content:', content);
         return content;
      } catch (e) {}
   }; */
   /*   const deleteCategory = async () => {
      try {
         const { content } = await categoryService.remove(
            'beKN0527xTQhFmo1d6tTi'
         );
         console.log('content:', content);
         return content;
      } catch (e) {}
   }; */
   // getCategory().then();
   // deleteCategory().then();
   // updateCategory().then();
   // createCategory().then();

   return (
      <div>
         <h1>Расходы</h1>
      </div>
   );
};

export default Expense;
