import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
   getCurrentUserData,
   getIsLoggedIn,
   getUserDataStatus,
   getUsersLoadingStatus,
   // loadUsersList,
   loadCurrentUserData
} from '../../../store/authSlice';
// import { loadQualitiesList } from '../../../store/qualities';
// import { loadProfessionsList } from '../../../store/professions';

const AppLoader = ({ children }) => {
   const dispatch = useDispatch();
   const isLoggedIn = useSelector(getIsLoggedIn());
   const currentUser = useSelector(getCurrentUserData());
   const usersStatusLoading = useSelector(getUsersLoadingStatus());
   const userDataStatus = useSelector(getUserDataStatus());
   console.log('Apploader');
   console.log('currentUser Apploader', currentUser);
   console.log('isLoggedIn Apploader', isLoggedIn);
   console.log('usersStatusLoading Apploader', usersStatusLoading);
   console.log('userDataStatus Apploader', userDataStatus);

   /*   useEffect(() => {
      console.log('UseEffect');
      // dispatch(loadQualitiesList());
      // dispatch(loadProfessionsList());
      const result = isLoggedIn && !userDataStatus;
      console.log('result', result);
      if (result) {
         console.log('dispatch loadCurrentUserData');
         dispatch(loadCurrentUserData());
      }
   }, [isLoggedIn]); */

   useEffect(() => {
      console.log('useEffect');
      const result = isLoggedIn && !userDataStatus;
      console.log('result', result);
      if (result) {
         console.log('dispatch loadCurrentUserData');
         dispatch(loadCurrentUserData());
      }
   }, [isLoggedIn]);

   /*   const result = isLoggedIn && !userDataStatus;
   console.log('result', result);
   if (result) {
      console.log('dispatch loadCurrentUserData');
      dispatch(loadCurrentUserData());
   } */

   console.log('currentUser Apploader after', currentUser);

   if (usersStatusLoading) return 'Loading...';

   return children;
};

AppLoader.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
   ])
};

export default AppLoader;
