import React, { useEffect } from "react";
import {BrowserRouter as Router,Route, Link, Switch, useHistory, Redirect} from "react-router-dom";
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';

import { HomePage }from "./ui/HomePage";
import UserListPage from "./ui/UserListPage";
import MyInfoPage from "./ui/MyInfoPage";
import { ListForm }from "./ui/ListForm";
import UserIDPage from "./ui/UserIDPage";
import ChildrenPage from './ui/ChildrenPage';
import SearchBar from './ui/Layout/SearchBar';


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
            <div className="router-body">
                <div className="link-body">
                    <Link to="/app">FIND MATCH</Link>
                    <Link to="/app/grounds">GROUNDS</Link>
                    <Link to="/app/messages">MESSAGES</Link>
                    <Link to="/app/upcoming">UPCOMING</Link>
                    <Link to='/app/children-page'>Children Page</Link>
                    <SearchBar/>
                    <ListForm />
                </div>
                
                {/* <div style={{minWidth: '300px', minHeight: '150px'}}> */}
                    <Switch>
                        <Route exact path="/app">
                            <HomePage />
                        </Route>
                        <Route exact path="/app/grounds">
                            <MyInfoPage />
                        </Route>
                        <Route path="/app/messages">
                            <UserIDPage />
                        </Route>
                        <Route exact path="/app/upcoming">
                            <UserListPage />
                        </Route>
                        <Route exact path="/app/children-page">
                            <ChildrenPage/>
                        </Route>

                        {/* tương tự default trong switch case, đường dẫn không đúng mặc định trở về trang /app */}
                        <Redirect to="/app" />
                    </Switch>
                {/* </div> */}
            </div>
        </>
    )
}