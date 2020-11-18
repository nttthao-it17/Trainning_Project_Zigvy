import React from 'react';
import {
    FacebookOutlined,
    TwitterOutlined,
    InstagramOutlined,
    CopyrightOutlined
} from '@ant-design/icons';
import { Layout } from 'antd';

import { FooterStyled, LayoutStyled } from './styled';

const FooterComponent = () => {
    return (
        <Layout>
            <FooterStyled>
                <LayoutStyled>
                    <div className='line-top'>
                        <div className='menu-footer'>
                            <div>Logo Imnage</div>
                            <div>Download App</div>
                            <div>F.A.Q</div>
                            <div>Suport</div>
                            <div>Feedback</div>
                        </div>
                        <div className='line-icon'>
                            <FacebookOutlined />
                            <TwitterOutlined />
                            <InstagramOutlined />
                        </div>
                    </div>
                    <div className='line-bottom'>
                        <CopyrightOutlined />2017 Zigvy Inc.
                    </div>
                </LayoutStyled>

            </FooterStyled>
        </Layout>
    )

}

export default FooterComponent;