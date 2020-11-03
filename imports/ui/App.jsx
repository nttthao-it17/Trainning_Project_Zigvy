import React from 'react';
import LoginRouter from "../LoginRouter";
import UserIDPage from "./UserIDPage";

export const App = () => {
  // const user = useTracker(() => Meteor.user()); 

  return(
  <div className="container-app">
    <LoginRouter/>
    {/* <UserIDPage /> */}
  </div>
  );
};
