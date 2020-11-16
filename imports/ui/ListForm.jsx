import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useHistory } from 'react-router-dom';
import { Menu, Avatar, Dropdown } from 'antd';
import { UserOutlined, CaretDownOutlined } from '@ant-design/icons';

// const renderComponent = (route) =>{
//     switch(route){
//         case "home": 
//             return(
//                 <div>home</div>
//             );
//         default: return null;        
//     }
// }

export const ListForm = () => {
    const user = useTracker(() => Meteor.user());
    const history = useHistory();

    const logout = () => Meteor.logout((err) => {
        console.log(err)
        if (!err) {
            history.push("/login");
        }
    });

    const menu = (
        <Menu>
            <Menu.Item key='0'>Profile</Menu.Item>
            <Menu.Item key='1'>Logout</Menu.Item>
            {/* <label style={{ color: 'white' }}>{user && user.username}</label>&nbsp;
            <button onClick={logout}>Logout</button> */}
        </Menu>
    )

    return (
        <div className='main-layout'>
            <Avatar icon={<UserOutlined />}/>  
            <Dropdown overlay={menu} trigger={['click']}>
                <CaretDownOutlined style={{color: 'white', marginTop: '10px'}}/>
            </Dropdown>
        </div>
    );
}