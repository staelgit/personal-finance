import React from 'react';
// import User from './user';
import Logo from './logo';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import NavProfile from './navProfile';
import MainMenu from './mainMenu';

const Header = () => {
   const { currentUser } = useAuth();
   return (
      <div className="flex h-full items-center justify-between">
         <Logo />

         {currentUser && (
            <div className="mx-4 h-full">
               <MainMenu />
            </div>
         )}

         <div className="d-flex">
            {currentUser ? (
               <NavProfile />
            ) : (
               <Link
                  className="flex items-center rounded-md px-2 py-2 text-sm hover:bg-secondary-ultralight hover:text-black"
                  to="/login"
               >
                  <ArrowLeftOnRectangleIcon
                     className="rotate-180 mr-1 h-5 w-5"
                     aria-hidden="true"
                  />
                  Login
               </Link>
            )}
         </div>
      </div>
   );
};

export default Header;