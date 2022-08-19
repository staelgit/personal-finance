import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
   const classes = 'px-4 py-2 rounded-xl';
   return (
      <nav className="space-x-2">
         <NavLink className={classes} to="/">
            Главная
         </NavLink>

         <NavLink className={classes} to="/operations">
            История
         </NavLink>
      </nav>
   );
};

export default NavBar;
