<template>
    <div>
        <center>
            <h1>Login</h1>
        </center>
          <v-text-field
        v-model="form.email"
        label="Your email"
        required></v-text-field>
          <v-text-field
        v-model="form.password"
        label="Your password"
        required></v-text-field>
        <v-btn @click="btnLogin" color="primary">Login</v-btn>
    </div>
</template>


<script>
export default {
    name:'Login',
    data(){
        return{
            form:{
                email:'',
                password:'',
            }
        }
    },
    methods:{
        btnLogin(){
            
        }
    }
}
</script>
