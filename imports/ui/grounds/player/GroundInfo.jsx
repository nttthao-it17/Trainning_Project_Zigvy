import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Card, Avatar } from 'antd';
import { UserOutlined, StarOutlined, ShareAltOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';

import { ButtonStyledGroundInfo, TitleOfGround, FeeGroundStyled } from "../styled";
import PageHeader from '../../mainLayout/pageHeader/PageHeader';
import GroundCollection from "../../../db/GroundCollection";
import AvailableTime from '../../../db/AvailableTime';

const { Meta } = Card;
const GroundInfo = () => {
    let { id } = useParams();
    const { groundInfoById, availableTimeData } = useTracker(() => {
        const subAllGrounds = Meteor.subscribe('grounds').ready();
        const groundInfoById = GroundCollection.findOne({ _id: id });

        const subAvailableTime = Meteor.subscribe('availableTime').ready();
        const availableTimeData = AvailableTime.findOne({ groundId: id });
        return { groundInfoById, availableTimeData };
    }, [id]);
    const availableTime = ((availableTimeData.timeAvailableTo - availableTimeData.timeAvailableFrom) / 60).toFixed(0);

    return (
        <>
            <PageHeader title={"Ground"} showBack />
            <div
                className='bodyOfLayout'
                style={{ display: 'flex', margin: '0 auto', width: '90%' }}
            >
                <div
                    className='imgLayout'
                    style={{ width: '65%', paddingRight: '30px' }}
                >
                    <img src={groundInfoById.imageGround} style={{ width: '100%' }} />
                </div>
                <div
                    className='bottomLayout'
                    style={{ width: '35%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                    <TitleOfGround>{groundInfoById.groundName}</TitleOfGround>
                    <p>{groundInfoById.address}</p>
                    <Card bordered={false} style={{ borderTop: '1px solid darkgrey' }}>
                        <Meta
                            avatar={
                                <Avatar icon={<UserOutlined />} />
                            }
                            title='first name'
                            description='owner-player'
                        />
                    </Card>
                    <p>{groundInfoById.description}</p>
                    <FeeGroundStyled >{`$${groundInfoById.pricePerHour}.00`}
                        <span style={{ color: 'gray', fontSize: '16px' }}> /hr</span>
                    </FeeGroundStyled>

                    <div>
                        <ButtonStyledGroundInfo size='large' >BOOK NOW</ButtonStyledGroundInfo>
                        <ButtonStyledGroundInfo size='large' icon={<StarOutlined className='startIcon' />} >Favorite</ButtonStyledGroundInfo>
                        <ButtonStyledGroundInfo size='large' icon={<ShareAltOutlined className='shareIcon' />}>Share</ButtonStyledGroundInfo>
                    </div>
                    <h2 style={{ color: 'green' }}><strong>{availableTime}</strong>
                        <span> hours Available </span>
                    </h2>
                </div>
            </div>
        </>
    )
}

export default GroundInfo;