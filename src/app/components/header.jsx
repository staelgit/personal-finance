import React from 'react';
import NavBar from './navBar';
import User from './user';

const Header = () => {
   return (
      <div className="flex h-full justify-between items-center">
         <NavBar />
         <User />
      </div>
   );
};

export default Header;
