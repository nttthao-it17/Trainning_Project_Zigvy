const { MongoObject } = require("simpl-schema");

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

UsersCollection = new Mongo.Collection('usersCollection');
//schema attach to Collection
UsersCollection.schema = new SimpleSchema({
    username: String,
    profile : Object,
        'fullname': String,
        'email': String,
        'phone': Number,
        'userRole': {type: Boolean, defaultValue: false},
    services: {
        type: Object,
        blackbox: true
    }
})