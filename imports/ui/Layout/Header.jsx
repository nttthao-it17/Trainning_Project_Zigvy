import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import SearchBar from './SearchBar';
import ListForm from '../ListForm';

const { Header } = Layout;

const HeaderComponent = () =>{
    return (
        <Layout>
            <Header>
                <div className="link-body">
                    <Link to="/app">FIND MATCH</Link>
                    <Link to="/app/grounds">GROUNDS</Link>
                    <Link to="/app/messages">MESSAGES</Link>
                    <Link to="/app/upcoming">UPCOMING</Link>
                    <Link to='/app/children-page'>Children Page</Link>
                    <SearchBar />
                    <ListForm />
                </div>
            </Header>
        </Layout>
    )
}

export default HeaderComponent;