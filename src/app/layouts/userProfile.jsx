import React from 'react';
import { useParams, Navigate, Route } from 'react-router-dom';
import UserPage from '../components/page/userPage';
import EditUserPage from '../components/page/editUserPage';
import UserProvider from '../hooks/useUsers';
import { useAuth } from '../hooks/useAuth';

const UserProfile = () => {
   console.log('userProfile');
   const { userId, edit } = useParams();
   const { currentUser } = useAuth();

   return (
      <>
         <UserProvider>
            {edit === 'edit' ? (
               userId === currentUser._id ? (
                  <EditUserPage />
               ) : (
                  <Route
                     path="*"
                     element={
                        <Navigate
                           to={`/user/${currentUser._id}/edit`}
                           replace
                        />
                     }
                  />
               )
            ) : (
               <UserPage id={userId} />
            )}
         </UserProvider>
      </>
   );
};

export default UserProfile;
