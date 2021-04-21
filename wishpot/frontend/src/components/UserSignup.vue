<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link to="/">Login</router-link>
    <div class="form">
      <label for="email">Email</label>
      <input type="text" id="form-email" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserSignup',

  data () {
    return {
      msg: 'Wishpot signup'
    }
  }
}
</script>
