<template>
  <div>
    <b-jumbotron header="auth test">
      <div v-if="isAuth">I'm authenticated</div>
    </b-jumbotron>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
  },
  computed: {
    ...mapGetters(['isAuth'])
  }
}
</script>
