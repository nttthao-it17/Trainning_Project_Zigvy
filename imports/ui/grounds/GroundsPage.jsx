import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import 'antd/dist/antd.css';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';

import { InputNumberStyled } from './styled';
import PageHeader from '../mainLayout/pageHeader/PageHeader';
import GroundCollection from '../../db/GroundCollection';
import CustomUploadSingleImage from './UploadImages';
import GoogleMapAddress from './GoogleMapAddress';

const GroundsCollectionCreateForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    const [file, setFile] = useState(null);
    return (
        <>
            <Modal
                visible={visible}
                title="Add new ground"
                okText="Create"
                cancelText="Cancel"
                onCancel={onCancel}
                onOk={() => {
                    form
                        .validateFields()
                        .then((values) => {
                            form.resetFields();
                            onCreate({...values, imageGround: file.response.url });
                        })
                        .catch((info) => {
                            console.log('Validate Failed:', info);
                        });
                }}
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="form_in_modal"
                >
                    <Form.Item
                        name="groundName"
                        label="Ground name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the ground name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="pricePerHour"
                        label="Price-per-hour"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the price-per-hour!',
                            },
                        ]}
                    >
                        <InputNumberStyled />
                    </Form.Item>
                    <Form.Item
                        name="minMinutesUnit"
                        label="Min-minutes-unit"                        
                        rules={[
                            {
                                required: true,
                                message: 'Please input the min-minutes-unit!',
                            },
                        ]}
                    >
                        <InputNumberStyled />
                    </Form.Item>
                    <Form.Item
                        name="address"
                        label="Address"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the address!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <GoogleMapAddress/>
                    <Form.Item 
                        name="description"  
                        label="Description"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the description!',
                            },
                        ]}
                    >
                        <Input type="textarea" />
                    </Form.Item>
                    {/* ImageUploader */}
                    <label>Ground image</label>
                    <CustomUploadSingleImage value={file} onChangeFile={setFile} />
                    
                </Form>
            </Modal>
        </>
    );
};

const GroundsPage = () => {
    const [visible, setVisible] = useState(false);

    const insertGround = (values) =>{
        console.log('insertGround')
        Meteor.call('ground.insert', values, function(err){
            if(!err){
                alert('insert success!');
                return;
            }else{
                return console.log(err);
            }
        })
    }

    const onCreate = (values) => {
        console.log('Received values of form: ', values);
        setVisible(false);
        insertGround(values);
    };

    const isReady = useTracker(() =>{
        const sub = Meteor.subscribe('grounds').ready();
        // console.log('1',sub)
        return sub;
    })

    const groundsData = useTracker(() =>{
        const data = GroundCollection.find({}).fetch();
        // console.log('2',data)
        return data;
    })

    const currentUser = useTracker(() =>{
        const curUser = Meteor.user();
        return curUser;
    })
    // console.log(isReady)

    const handleCreate = (values) =>{
        if(isReady) { 
            console.log(currentUser.profile.userRole)
            if(currentUser.profile.userRole === 'owner')
            {
                // thuthao123
                // pass: 1 -> owner
                console.log('grounds: ', groundsData) 
                onCreate(values);
            }else{
                alert('Not permission!');
                return;
            }
        }
    }

    return (
        <div>
            <PageHeader title={"Ground"} showBack={false} />
            <Button
                type="primary"
                onClick={() => {setVisible(true);}}
            >
                New Grounds
            </Button>
            <GroundsCollectionCreateForm
                visible={visible}
                onCreate={handleCreate}
                onCancel={() => {setVisible(false);}}
            />
        </div>
    );
};

export default GroundsPage;