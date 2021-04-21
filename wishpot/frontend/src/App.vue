<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import UserLogin from './components/UserLogin'
import UserSignup from './components/UserSignup'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Wishpot app'
    }
  },
  components: {
    UserLogin,
    UserSignup
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
