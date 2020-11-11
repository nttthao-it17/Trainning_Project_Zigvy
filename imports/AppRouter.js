import React, { useEffect } from "react";
import {BrowserRouter as Router,Route, Link, Switch, useHistory, Redirect} from "react-router-dom";
import { Meteor } from 'meteor/meteor';

import { HomePage }from "./ui/HomePage";
import UserListPage from "./ui/UserListPage";
import MyInfoPage from "./ui/MyInfoPage";
import { ListForm }from "./ui/ListForm";
import UserIDPage from "./ui/UserIDPage";
import { useTracker } from 'meteor/react-meteor-data';


export default () =>{
    // const history = useHistory();
    // useEffect(() =>{
    //     if(!Meteor.userId()){
    //         history.push("/login")
    //     }
    // },[])

    const currentUserId = useTracker(() =>{
        const currentUserId = Meteor.userId();
        return currentUserId;
    })

    if (!currentUserId) {
        return <Redirect to="/login" />
    }
    return(
        <>
            <ListForm />
            <div className="router-body">
                <div className="link-body">
                    <Link to="/app">Home</Link>
                    <Link to="/app/info">My Infomation</Link>
                    <Link to="/app/users">Users</Link>
                </div>
                
                <Switch>
                    <Route exact path="/app">
                        <HomePage />
                    </Route>
                    <Route exact path="/app/info">
                        <MyInfoPage />
                    </Route>
                    <Route path="/app/users/:userId">
                        <UserIDPage />
                    </Route>
                    <Route exact path="/app/users">
                        <UserListPage />
                    </Route>
                    {/* tương tự default trong switch case, đường dẫn không đúng mặc định trở về trang /app */}
                    <Redirect to="/app" />
                </Switch>
            </div>
        </>
    )
}