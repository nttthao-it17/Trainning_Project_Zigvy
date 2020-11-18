import React from 'react';
import { Layout } from 'antd';

import SearchBar from '../SearchBar/SearchBar';
import ListForm from '../../UserLogout/ListForm';
import { HeaderStyled, LinkStyled } from './styled';

const { Header } = Layout;

const HeaderComponent = () => {
    return (
        <Layout>
            <Header>
                <HeaderStyled>
                    <div className="link-body">
                        <LinkStyled to="/app">FIND MATCH</LinkStyled>
                        <LinkStyled to="/app/grounds">GROUNDS</LinkStyled>
                        <LinkStyled to="/app/messages">MESSAGES</LinkStyled>
                        <LinkStyled to="/app/upcoming">UPCOMING</LinkStyled>
                        <LinkStyled to='/app/children-page'>Children Page</LinkStyled>
                        <SearchBar />
                        <ListForm />
                    </div>
                </HeaderStyled>
            </Header>
        </Layout>
    )
}

export default HeaderComponent;