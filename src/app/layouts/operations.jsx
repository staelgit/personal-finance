import React from 'react';
import operationService from '../services/operation.service';

const Operations = () => {
   const getOperation = async () => {
      try {
         const { content } = await operationService.get();
         console.log('content:', content);
         return content;
      } catch (e) {}
   };
   /*   const createOperation = async () => {
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
   getOperation().then();
   // deleteOperation().then();
   return <h1>Operations Page</h1>;
};

export default Operations;
