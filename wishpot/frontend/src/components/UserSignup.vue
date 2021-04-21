<template>
  <div>
    <h1>Woop!</h1>
    <h2>{{ user }}</h2>
    <div class="form">
      <label for="email">Email</label>
      <input type="text" id="form-email" />
    </div>
  </div>
</template>

<script>
export default {
  name: "UserSignup",

  data() {
    return {
      user: "Bob"
    };
  },
  methods: {
    UserSignup: function() {
      let user = "";
      console.log(user);
      return user;
    }
  }
};
</script>
