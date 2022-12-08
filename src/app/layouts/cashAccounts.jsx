import React from 'react';
// import Loader from '../components/ui/loader';
import AccountsList from '../components/page/accountsList';
// import accountService from '../services/account.service';
import { getAccounts } from '../store/accounSlice';
import { useSelector } from 'react-redux';

const CashAccounts = () => {
   const accounts = useSelector(getAccounts());
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

   return (
      <div>
         <h1>Счета</h1>
         <AccountsList accounts={accounts} />
      </div>
   );
};

export default CashAccounts;
