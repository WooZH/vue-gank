<template>
  <!--<div class="topTip">今日暂无数据, 已显示{{dateTime.year}}-{{dateTime.month}}-{{dateTime.day}}的数据</div>-->
  <div class="topTip">{{msg}}</div>

</template>

<script>
  export default {
    name: 'topBar',
    data () {
      return {
        title: 'topTip',
        msg: this.message
      }
    },
    props: ['message'],
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/css/common.scss";
  .topTip{
    text-align: center;
    position: fixed;
    top: px2rem(90px);
    left: 0;
    width: px2rem(750px);
    background: rgba(220, 172, 48, 0.81);
    color: #fff;
    padding: 0.2rem 0;
    font-size: 13px;
    z-index: 10;
  }
</style>
