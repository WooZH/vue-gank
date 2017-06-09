<template>
  <!--福利数据渲染-->
  <ul id="mainUl">
    <li class="card" v-for="(item,key) in viewData.results">

      <div class="card-title">{{key}}</div>
      <ul>
        <li class="card-info" v-for="sub in item" @click="goTo(sub.url)">
          <p v-if="sub.type != '福利'" class="card-desc">{{sub.desc}}</p>
          <!--<p class="card-date">{{sub.publishedAt | moment}}</p>-->
          <div v-if="sub.type == '福利'">
            <img class="fuli" :src="sub.url | resizeMD" alt="FULI PIC">
          </div>
          <p class="card-from">
            来源: {{sub.source}}
          </p>
          <p class="card-author">
            作者: {{sub.who}}
          </p>

          <!--pic 403-->
          <!--<img v-if="sub.images" :src="sub.images[0] | resizeSM" alt="">-->
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'topBar',
    data () {
      return {
        title: 'daily',
      }
    },
    props: ['viewData'],
    methods: {

    },
    created: function(){
      console.log(this.viewData);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/css/common.scss";

  .fuli{
    width: 100%;
  }

  .fuli-card{
    padding: px2rem(10px) px2rem(10px) px2rem(20px) px2rem(10px);

  .fuli-img{
    margin-bottom: px2rem(30px);
  }
  }




</style>
