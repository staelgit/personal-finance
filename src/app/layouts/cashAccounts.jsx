import React, { useState } from 'react';
import Loader from '../components/ui/loader';
import AccountsList from '../components/page/accountsList';

const CashAccounts = () => {
   const [accounts /*, setAccounts */] = useState([]);
   const [loading /*, setLoading */] = useState(false);

   if (loading) return <Loader />;

   return (
      <div>
         <h1>Счета 133</h1>
         <AccountsList accounts={accounts} />
      </div>
   );
};

export default CashAccounts;
