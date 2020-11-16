import React from 'react';
import 'antd/dist/antd.css';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Layout } from 'antd';

const { Header } = Layout;

const PageHeader = () =>{
    return(
        <Layout>
            <Header className='header-layout' style={{backgroundColor: 'white'}}>
                <ArrowLeftOutlined className='icon-back-page' style={{borderRight: '2px solid black'}}/>
                <label style={{marginLeft: '10px', fontSize: '20px'}}>This is Page Header!</label>
            </Header>
        </Layout>
    )
}    

export default PageHeader;