import React, { useState, useEffect } from 'react';
// Libraries
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// Store
// import { signUp } from '../store/authSlice';
import { clearMessage, setMessage } from '../../store/messageSlice';
// Components
import SpinLoading from '../common/SpinLoader';
import Button from '../common/Button';
import TextField from '../common/inputs/TextInput';
import Card from '../common/Card';
import { useAuth } from '../../hooks/useAuth';
// Icons
import { UserIcon, KeyIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const signUpSchema = Yup.object({
   name: Yup.string()
      .min(3, 'Name must contain at least 3 symbols')
      .required('Required'),
   email: Yup.string().email('Invalid email address').required('Required'),
   password: Yup.string()
      .min(8, 'Password must contain at least 8 symbols')
      .required('Required')
});

const initialValues = {
   name: '',
   email: '',
   password: ''
};

const SignUpPage = () => {
   const [loading, setLoading] = useState(false);
   const [successful, setSuccessful] = useState(false);
   const { message } = useSelector((state) => state.message);
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { signUp } = useAuth();

   useEffect(() => {
      dispatch(clearMessage());
   }, [dispatch]);

   const handleSubmit = async (formValues) => {
      setLoading(true);
      setSuccessful(false);
      try {
         await signUp(formValues);
         setSuccessful(true);
         navigate('/');
      } catch (error) {
         dispatch(setMessage(error.message));
         setSuccessful(false);
      } finally {
         setLoading(false);
      }
   };

   const formik = useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: handleSubmit
   });

   return (
      <>
         <Card.Title>Sign Up</Card.Title>
         <FormikProvider value={formik}>
            {!successful && (
               <form
                  className="space-y-3 min-w-[200px] w-full"
                  onSubmit={formik.handleSubmit}
               >
                  <TextField label="Username" name="name" icon={UserIcon} />
                  <TextField label="Email" name="email" icon={EnvelopeIcon} />

                  <TextField
                     label="Password"
                     name="password"
                     type="password"
                     icon={KeyIcon}
                  />
                  <div className="pt-2">
                     <Button disabled={loading}>
                        {loading && <SpinLoading />} Sign Up
                     </Button>
                  </div>
               </form>
            )}
            {message && (
               <div className="form-group">
                  <div
                     className={
                        successful
                           ? 'alert alert-success'
                           : 'alert alert-danger'
                     }
                     role="alert"
                  >
                     {message}
                  </div>
               </div>
            )}
         </FormikProvider>
      </>
   );
};

export default SignUpPage;