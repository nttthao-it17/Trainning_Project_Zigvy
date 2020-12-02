import {Meteor} from 'meteor/meteor';
import { check } from 'meteor/check'; 
import GroundCollection from '../db/GroundCollection';

Meteor.methods({
    'ground.insert'(groundData){
        console.log('vao method')
        const {groundName, pricePerHour, minMinutesUnit, address, lat, lng, description} = groundData;
        check(groundData, {
            groundName: String,
            imageGround: String,
            pricePerHour: Number,
            minMinutesUnit: Number,
            address: String,
            lat: Number,
            lng: Number,
            description: String,
        });
        console.log('goi duoc check')
        if(!this.userId){
            throw new Meteor.Error('Not authorizaed!');
        }

        GroundCollection.insert({
            groundName: groundData.groundName,
            imageGround: groundData.imageGround,
            pricePerHour: groundData.pricePerHour,
            minMinutesUnit: groundData.minMinutesUnit,
            address: groundData.address,
            lat: groundData.lat,
            lng: groundData.lng,
            description: groundData.description,
            
            userId: this.userId,
        })
    }
})