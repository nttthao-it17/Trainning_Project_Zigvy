import { Meteor } from 'meteor/meteor';
import GroundCollection from '../../db/GroundCollection';

Meteor.publish('grounds', function publishGrounds(){
    return GroundCollection.find({});
})