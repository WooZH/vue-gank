<template>
  <div id="about">
    <div class="about">
      <p>
        Powered by vue.js.
      </p>
      <p>
        <a class="href_a" href="mailto:wangzhiheng703@gmail.com">wangzhiheng703@gmail.com</a>

      </p>

    </div>

    <div class="backHome" @click="backHome()">BACK</div>
  </div>
</template>

<script>
  /* eslint-disable */

  import topBar from '../components/topBar.vue'

  export default {
    name: 'test',
    components: {
      topBar
    },
    // define methods under the `methods` object
    watch: {
      '$route': 'fetchData'
    },
    methods: {

      fetchData: function () {
        console.log('test!')
      },
      backHome: function() {
        this.$router.push( {
          name: 'home'
        })
      }
    }
  }
</script>

<style src="../assets/css/about.scss" lang="scss" scoped>
</style>
