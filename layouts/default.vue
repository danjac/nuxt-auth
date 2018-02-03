<template>
  <b-container class="mt-4">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">Auth test</b-navbar-brand>

      <b-collapse is-nav id="nav-collapse">
        <b-navbar-nav>
          <b-nav-item to="/" exact>Home</b-nav-item>
          <b-nav-item to="/secure">Secure</b-nav-item>
          <b-nav-item to="/login" v-if="!isAuth">Login</b-nav-item>
          <b-nav-item @click="doLogout" v-if="isAuth">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

    </b-navbar>
    <b-container class="mt-2">
      <nuxt/>
    </b-container>
  </b-container>
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuth'])
  },
  methods: {
    async doLogout () {
      await axios.post('/api/logout')
      this.logout()
      this.$router.push('/')
    },
    ...mapActions(['logout'])
  }

}

</script>
