import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
   getCurrentUserData,
   getIsLoggedIn,
   // getUserDataStatus,
   getUsersLoadingStatus,
   // loadUsersList,
   loadCurrentUserData
} from '../../../store/authSlice';
import Loader from '../../common/loader';
import {
   loadAccountsList,
   getAccountsLoadingStatus
} from '../../../store/accounSlice';
// import { loadProfessionsList } from '../../../store/professions';

const AppLoader = ({ children }) => {
   const dispatch = useDispatch();
   const isLoggedIn = useSelector(getIsLoggedIn());
   const currentUser = useSelector(getCurrentUserData());
   const usersStatusLoading = useSelector(getUsersLoadingStatus());
   const accountsStatusLoading = useSelector(getAccountsLoadingStatus());

   console.log('AppLoader');
   // console.log('currentUser from AppLoader', currentUser);
   console.log('isLoggedIn from AppLoader', isLoggedIn);
   // console.log('usersStatusLoading from AppLoader', usersStatusLoading);
   // console.log('accountsStatusLoading:', accountsStatusLoading);

   useEffect(() => {
      console.log('useEffect isLoggedIn from appLoader');
      const result = isLoggedIn && !currentUser;
      console.log('result', result);
      if (result) {
         dispatch(loadCurrentUserData());
         dispatch(loadAccountsList());
      }
   }, [isLoggedIn]);

   // console.log('currentUser AppLoader after', currentUser);
   const isShowLoader =
      isLoggedIn &&
      (!currentUser || usersStatusLoading || accountsStatusLoading);
   console.log('isShowLoader:', isShowLoader);
   if (isShowLoader) return <Loader />;

   return children;
};

AppLoader.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
   ])
};

export default AppLoader;
