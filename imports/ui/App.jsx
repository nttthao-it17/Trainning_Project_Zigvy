import React from 'react';
import LoginRouter from "../LoginRouter";
import RegistrationForm from './RegistrationForm';

export const App = () => {

  return(
  <div className="container-app">
    <LoginRouter/>
    {/* <RegistrationForm/> */}
  </div>
  );
};
