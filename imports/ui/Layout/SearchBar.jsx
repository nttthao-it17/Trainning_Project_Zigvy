import React from 'react';
import 'antd/dist/antd.css';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const SearchBar = () =>{
    return(
        <Input 
            placeholder='Search ground, team or someone' 
            prefix={< SearchOutlined style={{width: '30px'}}/>}
            style={{width: '300px', margin: '0', marginTop: '5px', padding: '0 10px', borderRadius: '6px', height: '33px'}}
        />
    )
}

export default SearchBar;