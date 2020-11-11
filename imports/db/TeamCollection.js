import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

TeamCollection = new Mongo.Collection('team');

TeamCollection.schema = new SimpleSchema({
    logo: String,
    teamName: String,
    teamNumber: Number,
    // leaderID: //=> userID
})