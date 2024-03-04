<template>
    <img class="logo" src="../assets/resto-logo.jpg" alt="resto logo">
    <h1>Sign Up</h1>
    <form>
  <div class="mb-3">
    <input type="text" v-model="name" class="form-control" id="name" placeholder="Enter Your Name Here" >
  </div>
  <div class="mb-3">
    <input type="email" v-model="email" class="form-control" id="email" placeholder="Enter Your Email Here">
  </div>
  <div class="mb-3">
    <input type="password" v-model="password" class="form-control" id="password" placeholder="Enter Your Password Here">
  </div>
  <button type="submit" v-on:click="signUp" class="btn btn-primary">Sign Up</button>
  <router-link to="/log-in">Log In</router-link>
</form>
</template>
<script>
    import axios from 'axios'

    export default {
        name :'SignUp',
        data()
        {
            return {
                name:'',
                email:'',
                password:''
            }
        },
        methods:{
            async signUp(){
                if (!this.name || !this.email || !this.password) {
                alert('Please fill in all champs.');
            return;
        }
                let result = await axios.post("http://localhost:3000/users",{
                    name:this.name,
                    email:this.email,
                    password:this.password
                });
                if(result.status==201){
                    localStorage.setItem("user-info", JSON.stringify(result.data));
                    this.$router.push('/')
                }
            }
        }
    }
</script>

<style>
.logo{
    width: 150px;
}
</style>