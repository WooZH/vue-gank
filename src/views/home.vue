<template>
  <div id="home">
    <!-- 组件 -->
    <topBar></topBar>

    <!-- 2.0 过渡 -->

    <transition name="fade">
      <loading v-show="isLoading"></loading>
    </transition>
    <!-- 列表渲染 -->
    <ul>
      <li class="card" v-for="(item,key) in homeData.results">

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

    <div class="random-button" @click="randomList" v-show="showR">❖</i></div>
  </div>
</template>

<script>
  /* eslint-disable */

  import topBar from '../components/topBar';
  import loading from '../components/loading'


  export default {
    name: 'home',
    components: {
      topBar,
      loading
    },
    data () {
      return {
        isLoading: false,
        homeData: {},
        startY: '',
        endY: '',
        showR: true,
        dateTime: {
          year: '',
          month: '',
          day: ''
        }
      }
    },
    watch: {
      '$route': 'fetchData'
    },
    created () {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this.fetchData();
    },
    filters: {
      moment: function (value) {
        return value.split('T')[0];
      },
      resizeSM: function (value) {
        return value + '?imageView2/0/w/100'
      },
      resizeMD: function (value) {
        return value + '?imageView2/0/w/375'
      }
    },
    methods: {
      getInfo: function () {
//        显示加载

        let oriUrl = 'http://gank.io/api/day/';
        let requestUrl = oriUrl + this.dateTime.year + '/' + + this.dateTime.month + '/' + this.dateTime.day;
        this.isLoading = true;
        this.$http.get(requestUrl).then(function (resp) {
          if (!resp.error) {
            this.homeData = resp.data;

//        隐藏加载
            this.isLoading = false;
          }
        }, function (resp) {
          console.log("网络链接有问题,3s后将自动重试");
          var self = this;
          setTimeout(function () {
              self.getInfo();
            },
            3000)
        });
      },
      fetchData: function () {
        this.setDateTime();
        this.getInfo();
        console.log('home');
      },
      setDateTime: function() {
        let date = new Date()
        this.dateTime.year = date.getFullYear();
        this.dateTime.month = date.getMonth() + 1;
        this.dateTime.day = date.getDate();
      },
      goTest: function () {
        this.$router.push({
          name: 'about'
        })
      },
      goTo: function (url) {
        window.location.href = url;
      },
      randomList: function () {
        this.getInfo();
      },
      cltest: function () {
        console.log('test')
      }
    },
    mounted: function () {
//      replace ready

//      函数节流
//      js 滚动
//      var throttled = _.throttle(this.cltest, 1000);
//      window.onscroll = function () {
//        throttled();
//      };

    }
  }
</script>

<style src="../assets/css/home.scss" lang="scss" scoped></style>
