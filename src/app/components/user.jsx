import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const User = () => {
   return (
      <Link className="flex items-center space-x-2" to="/login">
         <span>UserName</span>
         <UserCircleIcon className="h-6 w-6" />
      </Link>
   );
};

export default User;
