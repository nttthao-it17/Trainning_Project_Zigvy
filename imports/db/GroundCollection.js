import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

GroundCollection = new Mongo.Collection('grounds')
//schema attach to collection
GroundCollection.schema = new SimpleSchema({
    groundName: String,
    imageGround: String,
    pricePerHour: Number,
    minMinutesUnit: Number,
    address: String,
    lat: Number,
    lng: Number,
    description: String,
    // voteStar: Number
})
export default GroundCollection;