import React from 'react';
// import User from './user';
import Logo from './logo';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import NavProfile from './navProfile';
import MainMenu from './mainMenu';

const Header = () => {
   const { currentUser } = useAuth();
   return (
      <div className="flex h-full items-center justify-between">
         <Logo />

         {currentUser && (
            <div className="mx-4">
               <MainMenu />
            </div>
         )}

         <div className="d-flex">
            {currentUser ? (
               <NavProfile />
            ) : (
               <Link className="flex items-center space-x-2" to="/login">
                  Login
               </Link>
            )}
         </div>
      </div>
   );
};

export default Header;
