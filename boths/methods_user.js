import User from './users'
import {Meteor } from 'meteor/meteor'
Meteor.methods({
    addUser(doc){
        return User.insert(doc)
    },
})