<template>
  <div id="home">
    <!--loading-->
    <transition name="fade">
      <loading v-show="isLoading"></loading>
    </transition>

    <!--顶部栏-->
    <topBar :date="selectedDate"></topBar>

    <!--导航-->
    <transition name="transY">
    <nav v-show="isToolbar">
      <ul class="nav">
        <!--<li class="li" @click="changeDaily()" :class="{'active': reqName == ''}">-->
        <li class="li" @click="changeDaily()" :class="{'active': reqName == ''}">
          daily
        </li>
        <li class="li" v-for="(item,key,index) in nav" @click="changeType(item)" :class="{'active': item == reqName}">
          {{item}}
        </li>
      </ul>
    </nav>
      </transition>



    <!-- top tip -->
    <transition name="upFade">
      <topTip :message="msgText" v-if="!isToday"></topTip>
    </transition>

    <div>
    <!--<ul id="mainUl" v-show="reqName == ''">-->
      <!--<li class="card" v-for="(item,key) in homeData.results">-->

        <!--<div class="card-title">{{key}}</div>-->
        <!--<ul>-->
          <!--<li class="card-info" v-for="sub in item" @click="goTo(sub.url)">-->
            <!--<p v-if="sub.type != '福利'" class="card-desc">{{sub.desc}}</p>-->
            <!--&lt;!&ndash;<p class="card-date">{{sub.publishedAt | moment}}</p>&ndash;&gt;-->
            <!--<div v-if="sub.type == '福利'">-->
              <!--<img class="fuli" :src="sub.url | resizeMD" alt="FULI PIC">-->
            <!--</div>-->
            <!--<p class="card-from">-->
              <!--来源: {{sub.source}}-->
            <!--</p>-->
            <!--<p class="card-author">-->
              <!--作者: {{sub.who}}-->
            <!--</p>-->

            <!--&lt;!&ndash;pic 403&ndash;&gt;-->
            <!--&lt;!&ndash;<img v-if="sub.images" :src="sub.images[0] | resizeSM" alt="">&ndash;&gt;-->
          <!--</li>-->
        <!--</ul>-->
      <!--</li>-->
    <!--</ul>-->
      <view_daily :viewData="homeData" v-if="!reqName">

      </view_daily>
      <view_fl :viewData="viewData" v-if="reqName == '福利'">

      </view_fl>

    <!--<div v-if="!reqName">-->
    <div>
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
    </div>
  </div>
</template>

<script>
  /* eslint-disable */

  import topBar from '../components/topBar'
  import loading from '../components/loading'
  import topTip from '../components/topTip.vue'
  import view_fl from '../components/view_fl.vue'
  import view_daily from '../components/view_daily.vue'

  export default {
    name: 'home',
    components: {
      topBar,
      loading,
      topTip,
      view_fl,
      view_daily
    },
    data () {
      return {
        isLoading: false,
        homeData: {},
        viewData: {},
        startY: '',
        endY: '',
        nav: [
          'all', 'Android', 'iOS', '休息视频', '福利', '拓展资源', '前端', '瞎推荐', 'App'
        ],
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
        isToolbar: false,
        reqName: '',
        sampleUrl: 'https://gank.io/api/data/',
        reqUrl: '',
        itemCount: '10',
        pageNo: '1',
        msgText: ''
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
//        console.log(typeof value);
//        console.log(value);
        if (value)
          return value.split('T')[0] + ' ' + value.split('T')[1].split('.')[0];
        else
          return value
      },
      resizeSM: function (value) {
        return value + '?imageView2/0/w/100'
      },
      resizeMD: function (value) {
        return value + '?imageView2/0/w/375'
      }
    },
    methods: {

      changeType: function (typeNo) {
        if (typeNo != this.reqName) {
//          this.reqName = typeNo;
          this.reqUrl = this.sampleUrl + typeNo + '/' + this.itemCount + '/' + this.pageNo;
          this.getInfoType()
          this.reqName = typeNo;

        }
      },
//    切换至每日 reqName 请求类型名重设
      changeDaily: function () {
        this.reqName = '';
        this.getInfo()
      },
      getInfo: function () {
//        显示加载
        this.isToolbar = false;
        let oriUrl = 'https://gank.io/api/day/';
        let requestUrl = oriUrl + this.dateTime.year + '/' + +this.dateTime.month + '/' + this.dateTime.day;
        this.isLoading = true;
        this.$http.get(requestUrl).then(function (resp) {
          if (!resp.error) {
            this.homeData = resp.data;
//          未获取到数据
            if (this.homeData.category.length < 1) {
              this.isToday = false;
              this.setYesterDay(this.dateTime.year, this.dateTime.month, this.dateTime.day)
              this.getInfo();
            }
//        隐藏加载
            this.isLoading = false;
            if (!this.isToday) {
              this.msgText = '暂无今日数据, 将加载' + this.selectedDate + '的内容'
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
      getInfoType: function () {
//        显示加载
        this.isToolbar=false;
        let requestUrl = this.reqUrl
        this.isLoading = true;
        this.$http.get(requestUrl).then(function (resp) {
          if (!resp.error) {
            this.viewData = resp.data;

            console.log(this.viewData)
//          未获取到数据
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
      },
      setDateTime: function () {
        let date = new Date()
        this.dateTime.year = date.getFullYear();
        this.dateTime.month = date.getMonth() + 1;
        this.dateTime.day = date.getDate();

        this.setShowDate(this.dateTime.year, this.dateTime.month, this.dateTime.day);
      },
      setYesterDay: function (year, month, day) {
        if (month == 1 && day == 1) {
          this.dateTime.year--;
          this.dateTime.month = 12;
          this.dateTime.day = 31
        }
        else {
          if (day == 1) {
            if (month == 2 || month == 4 || month == 8 || month == 9 || month == 11) {
              this.dateTime.month--;
              this.dateTime.day = 31

            }
            else if (month == 3) {
              if (year % 4 == 0 || year % 400 == 0) {
                this.dateTime.month--;
                this.dateTime.day = 29

              } else {
                this.dateTime.month--;

                this.dateTime.day = 28

              }
            }
            else {
              this.dateTime.month--;
              this.dateTime.day = 30
            }
          }
          else {
            this.dateTime.day--
          }
        }

        this.setShowDate(this.dateTime.year, this.dateTime.month, this.dateTime.day);

      },
      setShowDate: function (year, month, day) {
        var showMonth, showDay;
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
        self = this;
        if (this.isToolbar) {
          var newDateArray = this.selectedDate.split('-');
          this.dateTime.year = newDateArray[0]
          this.dateTime.month = newDateArray[1]
          this.dateTime.day = newDateArray[2]
          if (self.reqName)
            self.getInfoType()
          else
            self.getInfo();
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
      self = this;
      PullToRefresh.init({
        mainElement: '#mainUl',
        onRefresh: function () {
          if (self.reqName)
            self.getInfoType()
          else
            self.getInfo();
        }
      });
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
