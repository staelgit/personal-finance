import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Layout = () => {
   return (
      <div className="flex min-h-screen flex-col justify-between divide-y divide-secondary-light text-secondary-dark font-sans">
         <div className="header px-2 h-10">
            <Header />
         </div>

         <div className="main px-2 grow">
            <Outlet />
         </div>

         <div className="footer px-2 h-12">
            <Footer />
         </div>
      </div>
   );
};

export default Layout;
