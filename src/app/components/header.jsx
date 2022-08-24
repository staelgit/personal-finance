import React from 'react';
import User from './user';
import Logo from './logo';

const Header = () => {
   return (
      <div className="flex h-full items-center justify-between">
         <Logo />
         <User />
      </div>
   );
};

export default Header;
