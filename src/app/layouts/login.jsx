import React, { useState } from 'react';
// import LoginForm from '../components/ui/loginForm';
// import RegisterForm from '../components/ui/registerForm';
import { useParams } from 'react-router-dom';
import Card from '../components/common/Card';
import LoginPage from '../components/ui/LoginPage';
import SignupPage from '../components/ui/SignupPage';
import StyledNavLink from '../components/ui/StyledNavLink';

const Login = () => {
   const { type } = useParams;
   const [formType, setFormType] = useState(
      type === 'register' ? type : 'login'
   );
   const toggleFormType = () => {
      setFormType((prevState) =>
         prevState === 'register' ? 'login' : 'register'
      );
   };
   return (
      <>
         {formType === 'register' ? (
            <Card className="m-auto mt-3 w-96">
               {/* <Card.Title>Register</Card.Title> */}
               {/* <RegisterForm /> */}
               <SignupPage />
               <div className="mt-3">
                  Already have account?{' '}
                  <span className="text-sm text-slate-600">
                     <StyledNavLink
                        to=""
                        styleType="underline"
                        onClick={toggleFormType}
                     >
                        Log In
                     </StyledNavLink>
                  </span>
               </div>
            </Card>
         ) : (
            <Card className="m-auto mt-10 w-96">
               {/* <Card.Title>Login</Card.Title> */}
               {/* <LoginForm /> */}
               <LoginPage />
               <div className="mt-3">
                  Don`t have account?{' '}
                  <span className="text-sm text-slate-600">
                     <StyledNavLink
                        to=""
                        styleType="underline"
                        onClick={toggleFormType}
                     >
                        Sign Up
                     </StyledNavLink>
                  </span>
               </div>
            </Card>
         )}
      </>
   );
};

export default Login;
