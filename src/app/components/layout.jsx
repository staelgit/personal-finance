import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Layout = () => {
   return (
      <div className="flex min-h-screen flex-col justify-between">
         <div className="header h-12 bg-slate-200">
            <Header />
         </div>

         <div className="main grow bg-slate-100">
            <Outlet />
         </div>

         <div className="footer h-12 bg-slate-200">
            <Footer />
         </div>
      </div>
   );
};

export default Layout;
