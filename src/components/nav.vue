<template>
  <nav>
    <ul class="nav">
      <li class="li" v-for="(item,key,index) in nav" @click="changeType(item)" :class="{'active': item == reqName}">
        {{item}}
      </li>
    </ul>
  </nav>
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


  nav{
    width: px2rem(730px);
    background: rgba(42, 186, 136, 0.81);
    color: #ddd;
    overflow-x: auto; overflow-y: hidden;
    padding: 0 px2rem(10px);
  }

  .nav{

    height: px2rem(40px);
    font-size: 13px;
    line-height: px2rem(40px);
    display:inline;
    white-space: nowrap;
  .li{
    padding:px2rem(5px) px2rem(15px)  ;
    text-align: center;
    display: inline-block;
  //float: left;
  }
  .active{
    transition: all 0.2s;
    color: #fff;
    background: rgba(42, 186, 136, 0.95);
  }
  }
</style>
