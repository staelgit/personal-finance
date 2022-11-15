import React, { useState, useEffect } from 'react';
// Libraries
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik, FormikProvider } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
// Store
// import { login } from '../store/authSlice';
import { clearMessage, setMessage } from '../../store/messageSlice';
// Components
import SpinLoading from '../common/SpinLoader';
import Button from '../common/Button';
import TextField from '../common/inputs/TextInput';
import Card from '../common/Card';
import { useAuth } from '../../hooks/useAuth';
// Icons
import { KeyIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const validationSchema = Yup.object().shape({
   email: Yup.string().email('Invalid email address').required('Required'),
   password: Yup.string().required('This field is required!')
});

const initialValues = {
   email: '',
   password: ''
};

const LoginPage = () => {
   const [loading, setLoading] = useState(false);
   const { message } = useSelector((state) => state.message);
   const navigate = useNavigate();
   const location = useLocation();
   const { signIn } = useAuth();
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(clearMessage());
   }, [dispatch]);

   const handleLogin = async (formValue) => {
      setLoading(true);
      const redirect = location.state ? location.state.referrer.pathname : '/';
      try {
         await signIn(formValue);
         // history.push(
         //    history.location.state ? history.location.state.from.pathname : '/'
         // );
         navigate(redirect, { replace: true });
      } catch (error) {
         dispatch(setMessage(error.message));
      } finally {
         setLoading(false);
      }
   };

   const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit: handleLogin
   });

   return (
      <>
         <div className="text-slate-900">
            <Card.Title>Login</Card.Title>
            <FormikProvider value={formik}>
               <form
                  className="space-y-6 min-w-[200px] w-full"
                  onSubmit={formik.handleSubmit}
               >
                  <TextField label="Email" name="email" icon={EnvelopeIcon} />
                  <TextField
                     label="Password"
                     name="password"
                     type="password"
                     icon={KeyIcon}
                  />
                  <div className="pt-2">
                     <Button disabled={loading}>
                        {loading && <SpinLoading />} Log In
                     </Button>
                  </div>
               </form>

               {message && (
                  <div className="form-group">
                     <div className="alert alert-danger" role="alert">
                        {message}
                     </div>
                  </div>
               )}
            </FormikProvider>
         </div>
      </>
   );
};

export default LoginPage;
