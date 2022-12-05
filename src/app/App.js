import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './layouts/main';
import Operations from './layouts/operations';
import Login from './layouts/login';
// import NotFound from './layouts/notFound';
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
      <AppLoader>
         <AuthProvider>
            <Layout>
               <Switch>
                  <Route path="/operations" component={Operations} />
                  <Route path="/income" component={Income} />
                  <Route path="/expense" component={Expense} />
                  <Route path="/accounts" component={CashAccounts} />
                  <Route path="/login" component={Login} />
                  <Route path="/logout" component={LogOut} />
                  <Route path="/user/:userId?/:edit?" component={UserProfile} />
                  <Route exact path="/" component={Main} />
                  <Redirect to="/" />
               </Switch>
            </Layout>
         </AuthProvider>
         <ToastContainer />
      </AppLoader>
   );
}

export default App;
