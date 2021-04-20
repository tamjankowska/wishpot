<template>
    <div>
      <h1>Woop!</h1>
      <h2>{{ user }}</h2>
      <div class="form">
        <label for="email">Email</label>
        <input 
          type="text"
          id="form-email"
        />
      </div>
      <!--
    <p>Please work</p>
  
    <button
      class="btn btn-primary btn-margin"
      v-if="!authenticated"
      @click="login()">
      Log In
    </button>

    <button
      class="btn btn-primary btn-margin"
      v-if="authenticated"
      @click="privateMessage()">
      Call Private
    </button>

    <button
      class="btn btn-primary btn-margin"
      v-if="authenticated"
      @click="logout()">
      Log Out
    </button>
    {{"{{ "}}{{ message }} }}
    <br>
  -->
    </div>
</template>

<script>
export default {
/*import AuthService from './auth/AuthService'
import axios from 'axios'


const API_URL = 'http://localhost:8000'
const auth = new AuthService()*/
  name: 'UserSignup',

  data () {
    return {
      user: 'Bob'
    }
  },
  methods: {
    UserSignup: function () {
      let user = ''
      console.log(user)
      return user
    }
  }
  /*data () {
    this.handleAuthentication()
    this.authenticated = false

    auth.authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })

    return {
      authenticated: false,
      message: ''
    }
  },
  methods: {
    // this method calls the AuthService login() method
    login () {
      auth.login()
    },
    handleAuthentication () {
      auth.handleAuthentication()
    },
    logout () {
      auth.logout()
    },
    privateMessage () {
      const url = `${API_URL}/api/private/`
      return axios.get(url, {headers: {Authorization: `Bearer ${auth.getAuthToken()}`}}).then((response) => {
        console.log(response.data)
        this.message = response.data || ''
      })
    }
  },*/
}
</script>
