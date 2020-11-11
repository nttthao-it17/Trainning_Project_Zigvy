import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

AvailableTime = new Mongo.Collection();

AvailableTime.schema = new SimpleSchema({
    dayOfWeek: String,
    timeAvailableFrom: Number, //lưu theo phút của ngày
    timeAvailableTo: Number 
})
export default AvailableTime;