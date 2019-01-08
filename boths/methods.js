
import Messages from './items' //must be import

 Meteor.methods({
    addMessage(message) {
      return Messages.insert(message)
    },
    removeMessage(_id) {
      Messages.remove(_id);
    },
  });