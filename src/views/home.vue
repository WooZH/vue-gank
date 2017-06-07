<template>
  <div id="home">
    <!-- 组件 -->
    <topBar :date="selectedDate"></topBar>
    <!-- 2.0 过渡 -->

    <transition name="fade">
      <loading v-show="isLoading"></loading>
    </transition>
    <!-- 列表渲染 -->
    <transition name="upFade">
      <div class="topTip" v-if="!isToday">今日暂无数据, 已显示{{dateTime.year}}-{{dateTime.month}}-{{dateTime.day}}的数据</div>
    </transition>
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
    <transition name="transX">

    <div class="toolbar" @click="clickDateBtn" v-show="isToolbar">
      <p>{{selectedDate}}</p>
    </div>
      </transition>
    <input id="selectDate" class="hidden dateInput" type="date" v-model="selectedDate">

    <transition name="up">
      <div class="random-button" @click="refresh" v-show="!isToolbar">
        <span class="icon">❖</span>
      </div>

    </transition>

    <transition name="up">
      <div class="random-button" @click="refresh" v-show="isToolbar">
        <span class="icon">Go</span>
      </div>
    </transition>

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
        selectedDate: '',
        dateTime: {
          year: '',
          month: '',
          day: ''
        },
        today: '',
        showDate: '',
        isToday: true,
        isToolbar: false
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

        let oriUrl = 'https://gank.io/api/day/';
        let requestUrl = oriUrl + this.dateTime.year + '/' + +this.dateTime.month + '/' + this.dateTime.day;
        this.isLoading = true;
        this.$http.get(requestUrl).then(function (resp) {
          if (!resp.error) {
            this.homeData = resp.data;
//          未获取到数据
            if (this.homeData.category.length < 1) {
              this.isToday = false;
              this.setYesterDay(this.dateTime.year,this.dateTime.month,this.dateTime.day)
              this.getInfo();
            }
//        隐藏加载
            this.isLoading = false;
            if (!this.isToday) {
              let self = this;
              setTimeout(function () {
                  self.isToday = true
                },
                1800)
            }

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
      },
      setDateTime: function () {
        let date = new Date()
        this.dateTime.year = date.getFullYear();
        this.dateTime.month = date.getMonth() + 1;
        this.dateTime.day = date.getDate();

        this.setShowDate(this.dateTime.year,this.dateTime.month,this.dateTime.day);
      },
      setYesterDay: function (year,month,day) {
        if(month == 1 && day == 1){
          this.dateTime.year--;
          this.dateTime.month = 12;
          this.dateTime.day = 31
        }
        else
        {
          if(day == 1){
            if(month == 2 ||month == 4 ||month == 8 ||month == 9 ||month == 11){
              this.dateTime.month--;
              this.dateTime.day = 31

            }
            else if(month == 3){
              if(year%4==0 ||year%400==0){
                this.dateTime.month--;
                this.dateTime.day = 29

              }else{
                this.dateTime.month--;

                this.dateTime.day = 28

              }
            }
            else{
              this.dateTime.month--;
              this.dateTime.day = 30
            }
          }
          else{
            this.dateTime.day--
          }
        }

        this.setShowDate(this.dateTime.year,this.dateTime.month,this.dateTime.day);

      },
      setShowDate: function (year,month,day){
        var showMonth,showDay;
        if (month < 10 && month.length < 2)
          showMonth = '0' + month;
        else
          showMonth = month
        if (day < 10 && day.length < 2)
          showDay = '0' + day;
        else
          showDay = day

        this.selectedDate = year + '-' + showMonth + '-' + showDay
      },
      clickDateBtn: function () {
        document.getElementById('selectDate').focus();
      },
      goTo: function (url) {
        window.location.href = url;
      },
      refresh: function () {
        if (this.isToolbar) {
          var newDateArray = this.selectedDate.split('-');
          this.dateTime.year = newDateArray[0]
          this.dateTime.month = newDateArray[1]
          this.dateTime.day = newDateArray[2]

          this.getInfo();
          this.isToolbar = false;

        }
        else {
          this.isToolbar = true;
        }
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
