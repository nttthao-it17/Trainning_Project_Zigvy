import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useHistory } from 'react-router-dom';

const renderComponent = (route) =>{
    switch(route){
        case "home": 
            return(
                <div>home</div>
            );
        default: return null;        
    }
}

export const ListForm = () => {
    const user = useTracker(() => Meteor.user()); 
    const history = useHistory();

    const logout = () => Meteor.logout((err) =>{
        console.log(err)
        if(!err){
            history.push("/login");
        }
    });

    return(
        <div className = 'main-layout'>
            <div className = 'header'>
                <label>{user&&user.username}</label>&nbsp;
                <button onClick = {logout}>Logout</button>
            </div>
        </div>
    );
}