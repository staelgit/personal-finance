import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './app/pages/main';
import Operations from './app/pages/operations';
import Login from './app/pages/login';
import NotFound from './app/pages/notFound';
import CashAccounts from './app/pages/cashAccounts';
import Income from './app/pages/income';
import Layout from './app/components/layout';
import Expense from './app/pages/expense';

function App() {
   return (
      <div className="max-w-4xl m-auto bg-white ">
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Main />} />
               <Route path="operations" element={<Operations />} />
               <Route path="income" element={<Income />} />
               <Route path="expense" element={<Expense />} />
               <Route path="accounts" element={<CashAccounts />} />
               <Route path="login" element={<Login />} />
               <Route path="*" element={<NotFound />} />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
