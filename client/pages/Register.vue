<template>
    <div>
        <center>
            <h1>Register</h1>
        </center>
          <v-text-field
        v-model="form.name"
        label="User name"
        required></v-text-field>
          <v-text-field
        v-model="form.age"
        label="User age"
        required></v-text-field>
          <v-text-field
        v-model="form.address"
        label="User address"
        required></v-text-field>
          <v-text-field
        v-model="form.gender"
        label="User gender"
        required></v-text-field>
          <v-text-field
        v-model="form.email"
        label="User email"
        required></v-text-field>
          <v-text-field
          type="password"
        v-model="form.password"
        label="Your password"
        required></v-text-field>
        <v-btn @click="btnRegister" color="primary">Register</v-btn>
    </div>
</template>


<script>
export default {
    name:'Register',
    data(){
        return{
            form:{
                name:'',
                age:null,
                address:'',
                gender:'',
                email:'',
                password:'',
            }
        }
    },
    methods:{
        btnRegister(){
            Meteor.call('addUser',this.form,(err,re)=>{
                if(!err){
                    alert('Registered !')
                }
            })
        }
    }
}
</script>
