import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

Matching = new Mongo.Collection('matching')

Matching.schema = new SimpleSchema({
    status: String,
    active: {type: Boolean, defaultValue: false}
})