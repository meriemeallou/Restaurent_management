<template>
    <img class="logo" src="../assets/resto-logo.jpg" alt="resto logo">
    <h1>Sign Up</h1>
    <form>
  <div class="mb-3">
    <input type="text" class="form-control" id="name" placeholder="Enter Your Name" >
  </div>
  <div class="mb-3">
    <input type="email" class="form-control" id="email" placeholder="Enter Your Email">
  </div>
  <div class="mb-3">
    <input type="password" class="form-control" id="password" placeholder="Enter Your Password">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>
<script>
    export default {
        name :'App'
    }
</script>

<style>
.logo{
    width: 150px;
}
</style>