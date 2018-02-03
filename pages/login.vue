<template>
  <div>
    <b-form @submit.prevent="submit" novalidate>
      <b-form-group label="Email address" :invalid-feedback="errors.first('email')" :state="!errors.has('email')">
        <b-form-input type="email" name="email" v-model="form.email" v-validate="'required|email'"></b-form-input>
      </b-form-group>
      <b-form-group label="Password" :invalid-feedback="errors.first('password')" :state="!errors.has('password')">
        <b-form-input type="password" name="password" v-model="form.password" v-validate="'required'"></b-form-input>
      </b-form-group>
      <b-button variant="primary" size="lg" type="submit">Login</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async submit () {
      await this.$validator.validateAll()
      if (this.errors.any()) {
        return
      }
      try {
        await axios.post('/api/login', this.form)
        this.login()
        this.$router.push('/')
      } catch (e) {
        console.log('login failed')
      }
    },
    ...mapActions(['login'])
  }
}
</script>
