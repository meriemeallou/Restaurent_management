<template>
    <h1>Log In</h1>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="email" required>
  <label for="email">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="password" placeholder="Password" v-model="password" required>
  <label for="password">Password</label> <br>
  <button type="submit" class="btn btn-primary" v-on:click="login">Log In</button>
  <router-link to="/sign-up">Sign Up</router-link>

</div>
</template>
<script>
    import axios from 'axios'

export default {
    name:'PageLogin',
    data()
        {
            return {
                email:'',
                password:'',
            }
        },
    methods:{
        async login(){
            if (!this.email || !this.password) {
                alert('Please fill in both email and password.');
            return;
        }
            let result = await  axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )
            if(result.status==200 && result.data.length>0){
                    localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                    this.$router.push('/')
                }
        }
    }
}

</script>