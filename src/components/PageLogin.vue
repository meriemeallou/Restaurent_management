<template>
    <h1>Log In</h1>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="email" placeholder="name@example.com">
  <label for="email">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="password" placeholder="Password">
  <label for="password">Password</label> <br>
  <button type="submit" class="btn btn-primary">Log In</button>
  <router-link to="/sign-up">Sign Up</router-link>

</div>
</template>
<script>
export default {
    name:'PageLogin'
}

</script>