import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './app/pages/main';
import Operations from './app/pages/operations';
import Login from './app/pages/login';
import NotFound from './app/pages/notFound';
import Layout from './app/components/layout';

function App() {
   return (
      <div className="max-w-4xl m-auto px-3 bg-slate-200">
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Main />} />
               <Route path="operations" element={<Operations />} />
               <Route path="login" element={<Login />} />
               <Route path="*" element={<NotFound />} />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
