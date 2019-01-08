<template>
  <div class="chat">
    <h2>Chat</h2>

    <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Enter new message" />

    <div v-if="!$subReady.messages">
      Loading...
    </div>

    <div  class="message" v-for="msg in messages" :key="msg._id">
      {{msg.message}} | {{msg.no}} | 
      <button @click="removeMessage(msg._id)">x</button>
    </div>
  </div>
</template>

<script>
import Messages from '/boths/items'
export default {
  name: 'chat',
  data () {
    return {
      newMessage: '',
      // messages: [],
    }
  },
  meteor: {
    $subscribe: {
      'messages': [],
    },
    messages() {
      return Messages.find();
    },
  },
  methods: {
  
    sendMessage() {
    Meteor.call('addMessage', {message:this.newMessage,no:1});
      this.newMessage = '';
    },
    removeMessage(_id) {
      Meteor.call('removeMessage', _id);
    },
  },
};
</script>