import { Meteor } from 'meteor/meteor';
import GroundCollection from '../../db/GroundCollection';

Meteor.publish('grounds', function publishGrounds(){
    return GroundCollection.find({});
})

Meteor.publish('groundCrrUser', function publishGrounds(){
    return GroundCollection.find({userId: this.userId});
})