import React from 'react';
import 'antd/dist/antd.css';
// import { ArrowLeftOutlined } from '@ant-design/icons';
import { PageHeader  } from 'antd';

const PageHeaderComponent = (props) =>{
    const addtionalProps = {};
    //Cần 2 điều kiện để show icon:
    // có props onBack
    // backIcon != false
    if (!props.showBack) {
        addtionalProps.backIcon = false; // kh show icon
    } else {
        addtionalProps.onBack = () => {window.history.back()};
    }
    
    return(
        <PageHeader 
            ghost={false}
            className='site-page-header' 
            style={{padding: '16px 50px'}}
            title={props.title}
            {...addtionalProps}
        />
    )
}    

export default PageHeaderComponent;