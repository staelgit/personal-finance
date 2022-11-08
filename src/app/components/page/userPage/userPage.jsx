import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../common/loader';
import { useUser } from '../../../hooks/useUsers';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

const UserPage = ({ id: userId }) => {
   const { currentUser } = useAuth();
   const navigate = useNavigate();
   const { getUserById } = useUser();
   const user = getUserById(userId);

   const handleClick = () => {
      navigate(`edit`);
   };

   if (user) {
      return (
         <div className="container">
            <div className="card mb-3">
               <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center position-relative">
                     <img
                        src={user.image}
                        className="rounded-circle shadow-1-strong me-3"
                        alt="avatar"
                        width="150"
                        height="150"
                     />
                     <div className="mt-3">
                        <h4>{user.name}</h4>
                     </div>
                     <div className="mt-3">
                        <h4>{user.email}</h4>
                     </div>
                     <div className="mt-3">
                        <h4>{user.license}</h4>
                     </div>
                     {currentUser._id === user._id && (
                        <button
                           className="btn btn-primary btn-sm"
                           onClick={handleClick}
                        >
                           Изменить данные
                        </button>
                     )}
                  </div>
               </div>
            </div>
         </div>
      );
   } else {
      return <Loader />;
   }
};

UserPage.propTypes = {
   id: PropTypes.string.isRequired
};

export default UserPage;
