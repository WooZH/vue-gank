<template>
  <div class="bg-black">
    <div class="winner">
      <p>{{ type[msg] }} 获胜!</p>
      <!--<p>{{ msg }} 获胜!</p>-->
      <div class="action-bar">
        <button class="btn btn-new" @click="restart()">再开一局</button>
        <button class="btn btn-join" @click="backHome()">返回首页</button>
      </div>
    </div>
      </transition>
  </div>
</template>

<script>
  /* eslint-disable */

  export default {
    name: 'win',
    data () {
      return {
        who: 'v0.1',
        countAll: this.count,
        type:['村民','狼人']
      }
    },
    props: ['msg','count'],
    methods: {
      fetchData: function () {
        console.log('test!')
      },
      backHome: function () {
        console.log('newGame!')
        this.$router.push({
          name: 'start',
//          query:{
//            id:'1'
//          }
        })
      },
      restart: function () {
        console.log(this.countAll)
        console.log('newGame!')

        this.$emit('restart')
      },
      about: function () {
        console.log('about!');
        alert('狼人杀 alpha 0.1');
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/css/common.scss";

  .bg-black {
    position: fixed;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.76);
    z-index: 10;
  }

  .winner {
    position: fixed;
    top: 50%;

    width: px2rem(750px);
    height: px2rem(400px);

    margin-top: px2rem(-200px);

    background: #ffad46;
    color: #ffffff;

  p {
    text-align: center;
    font-size: 20px;
    line-height: px2rem(200px);
  }

  }

  .action-bar{
    text-align: center;
  }

  .btn {
    border: 0;
    width: px2rem(350px);
    height: px2rem(100px);
    font-size: 14px;
    line-height: px2rem(100px);
    /*margin: px2rem(100px) 10%;*/
    display: inline-block;

  &.btn-new {
    background: #43a0ff;
    color: #ffffff;
  }

  &.btn-join {
    background: #69b63d;
    color: #ffffff;
  }

  &.btn-link {
    background: transparent;
    color: #424242;
  }

  }

</style>
