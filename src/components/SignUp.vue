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
  <button type="submit" v-on:click="signUp" class="btn btn-primary">Submit</button>
</form>
</template>
<script>
    import axios from 'axios'

    export default {
        name :'App',
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
                let result = await axios.post("http://localhost:3000/users",{
                    name:this.name,
                    email:this.email,
                    password:this.password
                });
                console.warn(result);
                if(result.status==201){
                    alert('Added');
                    localStorage.setItem("user-info", JSON.stringify(result.data))
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