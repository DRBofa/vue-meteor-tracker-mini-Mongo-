import Item from './items'
import {Meteor} from 'meteor/meteor'

Meteor.methods({
    findItem(){
       return Item.find().fetch()
    },
    insertItem(doc){
        return Item.insert(doc)
    },
    removeItem(id){
        return Item.remove({_id:id})
    },
})