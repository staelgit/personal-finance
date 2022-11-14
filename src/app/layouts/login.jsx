import React, { useState } from 'react';
import LoginForm from '../components/ui/loginForm';
import { useParams } from 'react-router-dom';
import RegisterForm from '../components/ui/registerForm';
import Card from '../components/common/Card';

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
            <Card className="m-auto w-96">
               <Card.Title>Register</Card.Title>
               <RegisterForm />
               <p>
                  Already have account?{' '}
                  <a role="Button" onClick={toggleFormType}>
                     {' '}
                     Sign In{' '}
                  </a>
               </p>
            </Card>
         ) : (
            <Card className="m-auto mt-10 w-96">
               <Card.Title>Login</Card.Title>
               <LoginForm />
               <p>
                  Don`t have account?{' '}
                  <a role="Button" onClick={toggleFormType}>
                     {' '}
                     Sign Up{' '}
                  </a>
               </p>
            </Card>
         )}
      </>
   );
};

export default Login;
