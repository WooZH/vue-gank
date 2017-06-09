<template>
  <!--福利数据渲染-->
  <ul id="typeUl">
    <li class="card" v-for="(item,key) in viewData.results">
      <div class="fuli-card">
        <img class="fuli fuli-img" :src="item.url | resizeMD" alt="FULI PIC">
        <p class="card-from">
          来源: {{item.source}}
        </p>
        <p class="card-author">
          作者: {{item.who}}
        </p>
        <p class="card-date">发布日期: {{item.publishedAt | moment }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'topBar',
    data () {
      return {
        title: 'topTip',
        fuliData: this.viewData
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
