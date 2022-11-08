import React, { useState } from 'react';
import Loader from '../components/ui/loader';
import AccountsList from '../components/page/accountsList';
// import api from '../api';

const CashAccounts = () => {
   const [accounts /*, setAccounts */] = useState([]);
   const [loading /*, setLoading */] = useState(false);

   // useEffect(() => {
   //    setLoading(true);
   //    api.cashAccounts
   //       .fetchAll()
   //       .then((data) => setAccounts(data))
   //       .finally(() => setLoading(false));
   // }, []);

   if (loading) return <Loader />;

   return (
      <div>
         <h1>Счета 133</h1>
         <AccountsList accounts={accounts} />
      </div>
   );
};

export default CashAccounts;
