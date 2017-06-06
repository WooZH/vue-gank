<template>
  <div class="loading">
    <div class="loader">
      <div class="lr">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'loading',
    data () {
      return {
        msg: 'loading...'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/css/common.scss";

  .loading {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #c93a35;
    display: table;
  }

  .loader {
    position: absolute;
    top:50%;

    width: px2rem(750px);
    text-align: center;

    height: px2rem(300px);
    margin-top: px2rem(-150px);
  }

  .lr {
      position: absolute;
      top: 50%;
      left: 50%;
      width: px2rem(150px);
      height: px2rem(150px);
      margin-top: px2rem(-75px);
      margin-left: px2rem(-75px);

      background-image: url('../assets/img/loading.png');
      background-size: cover;
      animation: rotate 2.4s 0s infinite linear;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    /*50% {*/
      /*transform: rotate(180deg);*/
    /*}*/
    100% {
      transform: rotate(360deg);
    }
  }
</style>
