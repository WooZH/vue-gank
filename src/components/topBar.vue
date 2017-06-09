<template>
  <div class="top-bar">
    <p class="top-title">
      <span @click="goHome">{{title}}</span>

      <span v-if="date" class="date">{{date}} </span>
      <!--<span class="about" @click="goAbout">♕</span>-->
    </p>
  </div>
</template>

<script>
  export default {
    name: 'topBar',
    data () {
      return {
        title: 'Gank Daily'
      }
    },
    props: ['date','count'],
    methods: {
      goAbout: function () {
        this.$router.push({
          name: 'about'
        })
      },
      goHome: function () {
        this.$router.push({
          name: 'home'
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/css/common.scss";

  .top-bar {
    position: fixed;
    z-index: 9999;
    padding-left: px2rem(15px);
    padding-right: px2rem(15px);
    top: 0;
    left: 0;

    width: px2rem(720px);
    height: px2rem(90px);

    background-color: #2aba88;
  }

  .top-title {
    text-align: left;
    font-size: 22px;
    line-height: px2rem(90px);
    color: #ffffff;

    .about{
      float: right;
      font-size: 14px;
      color: #ffffff;
      margin-right: px2rem(5px);
    }
  }

  .date{
    font-size: 12px;
  }
</style>
