import React from 'react';
// import Loader from '../components/ui/loader';
import AccountsList from '../components/page/accountsList';
// import accountService from '../services/account.service';
import { getAccounts } from '../store/accounSlice';
import { useSelector } from 'react-redux';
import accountService from '../services/account.service';
import { getCurrentUserId } from '../store/authSlice';

const CashAccounts = () => {
   const accounts = useSelector(getAccounts());
   const userId = useSelector(getCurrentUserId());
   console.log('accounts from redux:', accounts);

   // const [accounts, setAccounts] = useState([]);
   // const [loading /*, setLoading */] = useState(false);
   /*   const getAccounts = async () => {
      try {
         const { content } = await accountService.get();
         console.log('content:', content);
         return content;
      } catch (e) {}
   }; */
   /*   const createAccount = async () => {
      try {
         const { content } = await accountService.create(
            {
               title: 'Банковская ячейка1'
            },
            'newUserId1'
         );
         console.log('content from create account:', content);
         return content;
      } catch (e) {}
   }; */
   /* const updateAccount = async () => {
      try {
         const { content } = await accountService.update({
            userId: '5tEZi7fnscO19fbprmlMhKMwM6A3',
            _id: 'GJMZWN_8hTtWSCoLAtCOL',
            title: 'Банковская ячейка_из метода апдейт'
         });
         console.log('content:', content);
         return content;
      } catch (e) {}
   }; */
   /*   const deleteAccounts = async () => {
      try {
         const { content } = await accountService.remove(
            '-fPX6VdgEkhHFB27_K6Dy'
         );
         console.log('content:', content);
         return content;
      } catch (e) {}
   }; */
   // getAccounts().then();
   // deleteAccounts().then();
   // updateAccount().then();
   // createAccount().then();

   // if (loading) return <Loader />;
   const handleCreate = async () => {
      const newAccount = await accountService.create(
         {
            title: 'Банковская ячейка'
         },
         userId
      );
      console.log('newAccount:', newAccount);
   };
   const handleDelete = async () => {
      const deletedAccount = await accountService.remove(
         '6394e6c532fe7c32c1d6e835'
      );
      console.log('deletedAccount:', deletedAccount);
   };
   const handleUpdate = async () => {
      const updatedAccount = await accountService.update({
         _id: '6394e6e232fe7c32c1d6e845',
         title: 'Зарплатная карта'
      });
      console.log('updatedAccount:', updatedAccount);
   };
   return (
      <div>
         <h1>Счета</h1>
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

         <AccountsList accounts={accounts} />
      </div>
   );
};

export default CashAccounts;
