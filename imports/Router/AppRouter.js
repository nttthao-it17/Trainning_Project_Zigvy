import React, { useEffect } from "react";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';

import { RouterStyled } from './AppRouterStyled';
import { HomePage } from "../ui/HomePage";
import UserListPage from "../ui/UserListPage";
// import MyInfoPage from "../ui/grounds/MyInfoPage";
import UserIDPage from "../ui/UserIDPage";
import ChildrenPage from '../ui/childrenPage/ChildrenPage';
import Header from '../ui/mainLayout/header/Header';
import Footer from '../ui/mainLayout/footer/Footer';
import GroundsPage from '../ui/grounds/GroundsPage';

export default () => {
    // const history = useHistory();
    // useEffect(() =>{
    //     if(!Meteor.userId()){
    //         history.push("/login")
    //     }
    // },[])

    const currentUserId = useTracker(() => {
        const currentUserId = Meteor.userId();
        return currentUserId;
    })

    if (!currentUserId) {
        return <Redirect to="/login" />
    }
    return (
        <RouterStyled>
            <div className="router-body" >
                <Header />
                <div className='child-router-body' >
                    <Switch>
                        <Route exact path="/app">
                            <HomePage />
                        </Route>
                        <Route exact path="/app/grounds">
                            <GroundsPage />
                        </Route>
                        <Route path="/app/messages">
                            <UserIDPage />
                        </Route>
                        <Route exact path="/app/upcoming">
                            <UserListPage />
                        </Route>
                        <Route exact path="/app/children-page">
                            <ChildrenPage />
                        </Route>

                        {/* tương tự default trong switch case, đường dẫn không đúng mặc định trở về trang /app */}
                        <Redirect to="/app" />
                    </Switch>
                </div>
                <Footer />
            </div>
        </RouterStyled>
    )
}