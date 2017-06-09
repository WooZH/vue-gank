<template>
  <!--福利数据渲染-->
  <ul id="mainUl">
    <li class="card" v-for="item in viewData.results" @click="goTo(item.url)">
      <div class="card-info">
        <p v-if="item.type != '福利'" class="card-desc">{{item.desc}}</p>
        <!--<p class="card-date">{{item.publishedAt | moment}}</p>-->
        <p v-if="item.type" class="card-from">
          类型: {{item.type}}
        </p>
        <p class="card-from">
          来源: {{item.source}}
        </p>
        <p class="card-author">
          作者: {{item.who}}
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'topBar',
    data () {
      return {
        title: 'iOS',
      }
    },
    props: ['viewData'],
    methods: {
      goTo: function (url) {
        window.location.href = url;
      }

    },
    created: function () {
//      console.log(this.viewData);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/css/common.scss";


</style>
