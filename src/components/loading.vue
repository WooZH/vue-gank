<template>
  <div class="loading">
    <div class="loader">
      <div class="ball">
        <div></div>
        <div></div>
        <div></div>
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
    background-color: rgba(42, 186, 136, 1);
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

  .ball {
    div {
      position: absolute;
      top: 50%;
      left: 50%;
      width: px2rem(250px);
      height: px2rem(250px);
      margin-top: px2rem(-125px);
      margin-left: px2rem(-125px);

      border-radius: 100%;
      border: 2px solid #fff;
      animation: ripple 1.25s 0s infinite cubic-bezier(.21, .53, .56, .8);
      &:nth-child(1) {
       animation-delay: -.6s;
      }
      &:nth-child(2) {
       animation-delay: -.4s;
      }
      &:nth-child(3) {
       animation-delay: -.2s;
      }
    }
  }

  @keyframes ripple {
    0% {
      transform: scale(.1);
      opacity: 1;
    }
    70% {
      transform: scale(1);
      opacity: .7;
    }
    100% {
      opacity: 0;
    }
  }
</style>
