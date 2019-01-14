<template>
<div>
    <center>
        <h1>Branch</h1>
    </center>
    <v-text-field
        v-model="form.name"
        label="Branch name"
        required></v-text-field>
    <v-text-field
        v-model="form.place"
        label="Branch place"
        required></v-text-field>

    <v-btn
        color="success"
        @click="btnAdd">Add Branch</v-btn>
</div>
</template>

<script>
import {Meteor} from 'meteor/meteor'

export default {
    name: '',
    data() {
        return {
            form: {
                name: null,
                place: null,
            }
        }
    },
    methods: {
        btnAdd() {
            Meteor.call('insertBranch',this.form,(err,re)=>{
                if(!err){
                    this.form= {
                name: null,
                place: null,
            }
                    alert('Success')
                }
            })
        }
    }
}
</script>
