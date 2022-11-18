import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './layouts/main';
import Operations from './layouts/operations';
import Login from './layouts/login';
import NotFound from './layouts/notFound';
import CashAccounts from './layouts/cashAccounts';
import Income from './layouts/income';
import Layout from './components/ui/layout';
import Expense from './layouts/expense';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './hooks/useAuth';
import LogOut from './layouts/logOut';
// import ProtectedRoute from './app/components/common/protectedRoute';
import UserProfile from './layouts/userProfile';
import AppLoader from './components/ui/hoc/appLoader';

function App() {
   return (
      <div className="bg-white text-secondary-dark">
         <AppLoader>
            <AuthProvider>
               <Routes>
                  <Route path="/" element={<Layout />}>
                     <Route index element={<Main />} />
                     <Route path="operations" element={<Operations />} />
                     <Route path="income" element={<Income />} />
                     <Route path="expense" element={<Expense />} />
                     <Route path="accounts" element={<CashAccounts />} />
                     <Route path="login" element={<Login />} />
                     <Route path="logout" element={<LogOut />} />
                     <Route path="user/:userId" element={<UserProfile />} />
                     <Route
                        path="user/:userId/:edit"
                        element={<UserProfile />}
                     />
                     <Route path="*" element={<NotFound />} />
                  </Route>
               </Routes>
            </AuthProvider>
            <ToastContainer />
         </AppLoader>
      </div>
   );
}

export default App;
