import Branch from './branches' //must be import

Meteor.methods({
  findBranch() {
    return Branch.find().fetch();
  },
  insertBranch(message) {
    return Branch.insert(message)
  },
  removeBranch(_id) {
    Branch.remove(_id);
  },
});