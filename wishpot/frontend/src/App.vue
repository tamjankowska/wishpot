<template>
  <div>
  <button>Please work</button>
    <UserSignup/> 
  
  </div>
</template>

<script>
import UserSignup from './components/UserSignup'

export default {
  name: 'app',
  data () {
    return {
      item: 'book'
    }
  },
  components: {
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
