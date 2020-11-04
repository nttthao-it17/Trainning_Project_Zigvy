import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

AvailableTime = new Mongo.Collection('availableTime');

AvailableTime.schema = new SimpleSchema({
    dayOfWeek: String,
    timeAvailableFrom: Number, //lưu theo phút của ngày
    timeAvailableTo: Number 
})