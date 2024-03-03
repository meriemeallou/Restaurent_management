<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div  id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/addr">Add Restaurent</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/updater" >Update Restaurent</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" v-on:click="logout" >Log Out</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
export default{
    name:'HeaderFile',
    methods:{
        logout(){
            localStorage.removeItem('user-info');
            // sessionStorage.removeItem('sessionData');
            this.$router.push('/log-in');
        }
    },
    mounted(){
            let user=localStorage.getItem('user-info')
            if(!user){
                this.$router.push('/log-in')
            }
        }
}

</script>