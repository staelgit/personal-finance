import React from 'react';
import { NavLink } from 'react-router-dom';

const MainMenu = () => {
   const navItems = [
      { id: 1661327623635, title: 'Главная', to: '/' },
      { id: 1661327667034, title: 'История', to: '/operations' },
      { id: 1661327767094, title: 'Доходы', to: '/income' },
      { id: 1661328764074, title: 'Расходы', to: '/expense' },
      { id: 1661327698037, title: 'Счета', to: '/accounts' }
   ];
   return (
      <nav className="space-x-2 h-full flex items-stretch justify-center">
         {navItems.map((navItem) => (
            <NavLink
               key={navItem.id}
               className="flex items-center"
               to={navItem.to}
            >
               <div className="px-2 leading-7 rounded-md hover:bg-secondary-ultralight">
                  {navItem.title}
               </div>
            </NavLink>
         ))}
      </nav>
   );
};

export default MainMenu;
