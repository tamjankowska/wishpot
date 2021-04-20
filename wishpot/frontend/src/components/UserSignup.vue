<template>
    <div>
      <h1>Woop!</h1>
    </div>
</template>

<script>
export default {
  name: 'UserSignup',

  data () {
    return {
      user: ''
    }
  },
  methods: {
    UserSignup: function () {
      let user = 'Bob'
      return user
    }
  }
}
</script>
