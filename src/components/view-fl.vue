<template>
  <!--福利数据渲染-->
  <div>
  <ul id="typeUl">
    <li class="card" v-for="(item,key) in viewData.results"  @click="showImg(item.url)">
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
    <transition name="fade">

  <img-view v-on:close="closeView" :imgUrl="imgUrl" v-show="isShowImg" @click="showImg()"></img-view>
      </transition>
  </div>
</template>

<script>
  import imgView from '../components/img-view.vue'

  export default {
    name: 'topBar',
    data () {
      return {
        title: 'topTip',
        fuliData: this.viewData,
        imgUrl:'',
        isShowImg: false,
        scrollTop: ''
      }
    },
    props: ['viewData'],
    methods: {
      showImg: function(url){
        if(!this.isShowImg)
        {
          this.afterOpen()
          this.imgUrl = url;
          this.isShowImg = true
        }

      },
      closeView: function(){

          this.isShowImg = false
          this.beforeClose()
      },
      afterOpen: function() {
        this.scrollTop = document.scrollingElement.scrollTop;
        document.body.classList.add('modal-open');
        document.body.style.top = -this.scrollTop + 'px';
//        document.body.style.position = 'fixed';
      },
      beforeClose: function() {
        this.scrollTop;
        document.body.classList.remove('modal-open');
        // scrollTop lost after set position:fixed, restore it back.
//        document.body.removeAttribute('style');
        document.scrollingElement.scrollTop = this.scrollTop;
        window.scroll(0,this.scrollTop)
//        document.body.style.position = '';

      }
    },
    components: {
      imgView
    },
    created: function(){
//      console.log(this.viewData);
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

  body.modal-open {
    position: fixed !important;
    width: 100%;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .4s
  }
  .fade-enter {
    opacity: 1;
    transform: scale(1.1);
  }
  .fade-leave-active {
    opacity: 0;
  }

</style>
