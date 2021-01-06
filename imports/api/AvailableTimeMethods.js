import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import AvailableTime from '../db/AvailableTime';

Meteor.methods({
    'availableTime.insert'(timeData){
        console.log('vao method insert available time');
        check(timeData, {
            dayOfWeek: String,
            timeAvailableFrom: Number, //lưu theo phút của ngày
            timeAvailableTo: Number, 
        })
        console.log('check available time success')
        if (!this.userId) {
            throw new Meteor.Error('Not authorizaed!');
        }
        AvailableTime.insert({
            dayOfWeek: timeData.dayOfWeek,
            timeAvailableFrom: timeData.timeAvailableFrom,
            timeAvailableTo: timeData.timeAvailableTo,

            userId: this.userId,
        })
    },
    
    'availableTime.delete'(_id){
        console.log('da vao method delete time available...');
        if (!this.userId) {
            throw new Meteor.Error('Not authorized!');
        }
        AvailableTime.remove({ _id });
    },
})