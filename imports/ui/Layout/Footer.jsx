import React from 'react';
import 'antd/dist/antd.css';
import { 
    FacebookOutlined,
    TwitterOutlined,
    InstagramOutlined,
    CopyrightOutlined    
} from '@ant-design/icons';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComponent = () =>{
        return(
            <Layout>
                <Footer style={{fontSize: '15px'}}>
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
                </Footer>
            </Layout>
        )
    
}

export default FooterComponent;