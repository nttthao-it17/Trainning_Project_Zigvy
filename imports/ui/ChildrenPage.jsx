import React from 'react';
import { Layout } from 'antd';

import HeaderPage from './Layout/PageHeader';
import Footer from './Layout/Footer';

const { Content } = Layout;

const ChildrenPage = () =>{
    return(
        <div>
            <HeaderPage/>
            <Content style={{minHeight: '365px', margin: '0 50px'}}>
                <div>welcommmmmmmmmmmm</div>
                <div>welcommmmmmmmmmmm</div>
                <div>welcommmmmmmmmmmm</div>
                <div>welcommmmmmmmmmmm</div>
                <div>welcommmmmmmmmmmm</div>
            </Content>
            <Footer/>
        </div>
    )
}

export default ChildrenPage;