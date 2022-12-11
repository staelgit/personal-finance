import React from 'react';
// import operationService from '../services/operation.service';
import { useSelector } from 'react-redux';
import { getOperations } from '../store/operationSlice';
import operationService from '../services/operation.service';
import { getCurrentUserId } from '../store/authSlice';

const Operations = () => {
   const operations = useSelector(getOperations());
   const userId = useSelector(getCurrentUserId());
   console.log('operations from redux:', operations);
   /*   const getOperation = async () => {
         try {
            const { content } = await operationService.get();
            console.log('content:', content);
            return content;
         } catch (e) {}
      };
         const createOperation = async () => {
         try {
            const { content } = await operationService.create(
               {
                  date: 1660743000001,
                  type: 'expense',
                  categoryId: 3,
                  accountId: 2,
                  comment: 'ККУУУкупил какую то фигню... '
               },
               'newUserId2'
            );
            console.log('content from createOperation:', content);
            return content;
         } catch (e) {}
      }; */
   /*   const updateOperation = async () => {
      try {
         const { content } = await operationService.update({
            userId: '5tEZi7fnscO19fbprmlMhKMwM6A3',
            _id: '1',
            date: 1660743000001,
            type: 'income',
            categoryId: 4,
            accountId: 3,
            comment: 'комент из апдейта '
         });
         console.log('content:', content);
         return content;
      } catch (e) {}
   }; */
   /* const deleteOperation = async () => {
      try {
         const { content } = await operationService.remove('1');
         console.log('content:', content);
         return content;
      } catch (e) {}
   }; */
   // createOperation().then();
   // updateOperation().then();
   // getOperation().then();
   // deleteOperation().then();

   const handleCreate = async () => {
      const newOperation = await operationService.create(
         {
            date: 1660743000001,
            type: 'expense',
            categoryId: '6395b22554a00885e4bdf19f',
            accountId: '6394e68132fe7c32c1d6e82f',
            comment: 'купил хлоргексединчик '
         },
         userId
      );
      console.log('newOperation:', newOperation);
   };

   const handleUpdate = async () => {
      const updatedOperation = await operationService.update({
         _id: '6395b79b54a00885e4bdf1d9',
         date: 1660743951490,
         type: 'income',
         categoryId: '6395b25554a00885e4bdf1a7',
         accountId: '6394e68132fe7c32c1d6e82f',
         comment: 'измененный коммент'
      });
      console.log('updatedOperation:', updatedOperation);
   };

   const handleDelete = async () => {
      const deletedOperation = await operationService.remove(
         '6395b79b54a00885e4bdf1d9'
      );
      console.log('deletedOperation:', deletedOperation);
   };

   return (
      <>
         <h1>Operations Page</h1>
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
      </>
   );
};

export default Operations;
