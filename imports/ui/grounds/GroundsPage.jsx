import React, { useState } from 'react';
import { Button, Modal, Form, notification } from 'antd';
import 'antd/dist/antd.css';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import moment from 'moment';

import PageHeader from '../mainLayout/pageHeader/PageHeader';
import GroundCollection from '../../db/GroundCollection';
import ShowListGrounds from './ShowListGrounds';
import GroundForm from './GroundForm';
import AvailableTime from '../../db/AvailableTime';

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
                            onCreate({ ...values, imageGround: file.response.url });
                        })
                        .catch((info) => {
                            console.log('Validate Failed:', info);
                        });
                }}
            >
                <GroundForm getForm={form} getFile={file} setNewFile={setFile} />
            </Modal>
        </>
    );
};

const notificationShow = (type, message, description) => {
    notification[type]({
        message,
        description,
    });
}

//subscribe available time
const displayTimeData = () =>{
    const isReadyTime = useTracker(() =>{
        const sub = Meteor.subscribe('availableTime').ready();
        return sub;
    })

    const timeData = useTracker(() =>{
        const data = AvailableTime.find({}).fetch();
        return data;
    })

    if(isReadyTime){
        console.log('timeData: ', {timeData});
    }
}

const GroundsPage = () => {
    const [visible, setVisible] = useState(false);

    const insertGround = (values) => {
        // console.log('insertGround')
        Meteor.call('ground.insert', values, function (err) {
            if (!err) {
                notificationShow('success', 'Success', 'Insert success!');
                return;
            } else {
                notificationShow('error', 'Error', 'Insert failed!');
                return console.log(err);
            }
        })
    }

    const onCreate = (values) => {
        console.log({values});
        console.log(values.availableTime);
        const test = values.availableTime.map(time => ({
            dayOfWeek: time.dayOfWeek,
            timeAvailableFrom: time.timeAvailableFrom.diff(moment(time.timeAvailableFrom.toDate()).startOf('day'), 'minutes'),
            timeAvailableTo: time.timeAvailableTo.diff(moment(time.timeAvailableTo.toDate()).startOf('day'), 'minutes'),
        }))

        values.availableTime = test;
        // console.log('dong 75: ', test);

        console.log('Received values of form: ', values);

        setVisible(false);
        insertGround(values);
    };

    const isReady = useTracker(() => {
        const sub = Meteor.subscribe('grounds').ready();
        // console.log('1',sub)
        return sub;
    })

    const groundsData = useTracker(() => {
        const data = GroundCollection.find({}).fetch();
        // console.log('2',data)
        return data;
    })

    const currentUser = useTracker(() => {
        const curUser = Meteor.user();
        return curUser;
    })
    // console.log(isReady)
    displayTimeData();

    const handleCreate = (values) => {
        if (isReady) {
            // console.log(currentUser.profile.userRole)
            if (currentUser.profile.userRole === 'owner') {
                // thuthao123
                // pass: 1 -> owner

                // console.log('grounds: ', groundsData)
                onCreate(values);
            } else {
                notificationShow('error', 'Error', 'No permission!');
                setVisible(false);
                return;
            }
        }
    }

    return (
        <div>
            <PageHeader title={"Ground"} showBack={false} />
            <Button
                type="primary"
                onClick={() => { setVisible(true); }}
            >
                New Grounds
            </Button>
            <GroundsCollectionCreateForm
                visible={visible}
                onCreate={handleCreate}
                onCancel={() => { setVisible(false); }}
            />
            <ShowListGrounds />
        </div>
    );
};

export default GroundsPage;