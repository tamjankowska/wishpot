<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-link to="/signup">Create an account</router-link>
    <div class="form">
      <label for="email">Email</label>
      <input type="text" id="form-email" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',

  data () {
    return {
      msg: 'Wishpot login'
    }
  }
}
</script>
