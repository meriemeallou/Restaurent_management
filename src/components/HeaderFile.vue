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
          <router-link class="nav-link" v-on:click="logout" to="/log-in">Log Out</router-link>
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
          localStorage.clear();
          this.$router.push('/log-in');
        }
    }
}

</script>