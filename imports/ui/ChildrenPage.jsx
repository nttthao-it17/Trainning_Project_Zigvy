import React from 'react';
import { Layout } from 'antd';

import PageHeader from './Layout/PageHeader';

const { Content } = Layout;

const ChildrenPage = () => {
    return (
        <>
            <PageHeader title={"Ground Info"} showBack={true} />
            <Content>
                <div style={{padding: '0 50px'}}>
                    <div>welcommmmmmmmmmmm</div>
                    <div>welcommmmmmmmmmmm</div>
                    <div>welcommmmmmmmmmmm</div>
                    <div>welcommmmmmmmmmmm</div>
                    <div>welcommmmmmmmmmmm</div>
                </div>
            </Content>
        </>
    )
}

export default ChildrenPage;