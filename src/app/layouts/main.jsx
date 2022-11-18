import React from 'react';
import useMockData from '../utils/mockData';
// import { useAuth } from '../hooks/useAuth';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../store/authSlice';

const Main = () => {
   const { error, initialize, progress, status } = useMockData();
   const handleClick = () => {
      initialize();
   };
   // const { currentUser } = useAuth();
   const isLoggedIn = useSelector(getIsLoggedIn());
   return (
      <div>
         <h1>Main Page</h1>
         {isLoggedIn ? (
            <>
               <h3>Инициализация данных в FireBase</h3>
               <ul>
                  <li>Status: {status}</li>
                  <li>Progress: {progress}%</li>
                  {error && <li>Error: {error}</li>}
               </ul>
               <button className="btn btn-primary" onClick={handleClick}>
                  Инициализировать
               </button>
            </>
         ) : (
            <h3>
               Чтобы воспользоваться нашим сервисом нужно быть авторизованным
            </h3>
         )}
      </div>
   );
};

export default Main;
