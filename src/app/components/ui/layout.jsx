import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Layout = () => {
   return (
      <div className="md:container min-h-screen px-2 m-auto flex  flex-col justify-between divide-y divide-secondary-light ">
         <div className="h-10">
            <Header />
         </div>

         <div className="grow">
            <Outlet />
         </div>

         <div className="h-12">
            <Footer />
         </div>
      </div>
   );
};

export default Layout;
