import React from 'react';
// import categoryService from '../services/category.service';
import { useSelector } from 'react-redux';
import { getCategories } from '../store/categorySlice';
import categoryService from '../services/category.service';
import { getCurrentUserId } from '../store/authSlice';

const Expense = () => {
   const categories = useSelector(getCategories());
   const userId = useSelector(getCurrentUserId());
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

   const handleCreate = async () => {
      const newCategory = await categoryService.create(
         { type: 'income', title: 'Деньги полученные в подарок' },
         userId
      );
      console.log('newCategory:', newCategory);
   };
   const handleDelete = async () => {
      const deletedCategory = await categoryService.remove(
         '6387acf69078668b3d249a75'
      );
      console.log('deletedCategory:', deletedCategory);
   };
   const handleUpdate = async () => {
      const updatedCategory = await categoryService.update({
         _id: '6395b1b154a00885e4bdf18a',
         title: 'Развлечения',
         type: 'expense'
      });
      console.log('updatedCategory:', updatedCategory);
   };

   return (
      <div>
         <h1>Расходы</h1>
         <div className="grid gap-4 grid-cols-3">
            <button
               className="inline-flex items-center justify-center py-3 px-5 leading-6 shadow text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none my-2"
               type="button"
               onClick={handleCreate}
            >
               Создать
            </button>
            <button
               className="inline-flex items-center justify-center py-3 px-5 leading-6 shadow text-sm font-medium rounded-md text-white bg-secondary-dark hover:bg-indigo-400 focus:outline-none my-2"
               type="button"
               onClick={handleUpdate}
            >
               Изменить
            </button>
            <button
               className="inline-flex items-center justify-center py-3 px-5 leading-6 shadow text-sm font-medium rounded-md text-white bg-danger-darkest hover:bg-indigo-400 focus:outline-none my-2"
               type="button"
               onClick={handleDelete}
            >
               Удалить
            </button>
         </div>
      </div>
   );
};

export default Expense;
