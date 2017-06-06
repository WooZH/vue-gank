<template>
  <div class="card" :class="{ 'dead': item.dead }">
    <div class="pic">
    </div>
    <div class="identity">{{item.identity}}</div>
    <div class="code">{{item.code}}</div>
    <div class="action-bar">
      <button class="die" @click="kill(item)">
        <span v-show="!item.dead">KILL</span>
        <span v-show="item.dead">DEAD</span>
      </button>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */

  export default {
    name: 'win',
    data () {
      return {
        who: 'v0.1'
      }
    },
    props: ['item'],
    methods: {
      fetchData: function () {
        console.log('test!')
      },
      create: function () {
        console.log('newGame!');
        this.winner();
        this.$router.push({
          name: 'judge',
//          query:{
//            id:'1'
//          }
        })
      },
      showWin: function (){
        if(this.human == this.allHuman ||this.special == this.allSpecial ){
          this.winnerName = '狼人';
          this.isShow = true;
        }
        else if(this.wolfMan == this.allWolf ){
          this.winnerName = '村民';
          this.isShow = true;
        }
      },
      closeWin: function(){
        this.isShow = false;
      },
      kill: function (item) {
        console.log(item)
        item.dead = !item.dead;
        this.$emit('kill')
//        this.winner()
      },
      about: function () {
        console.log('about!');
        alert('狼人杀 alpha 0.1');
      },
      winner: function(){
        self = this;
        self.wolfMan = 0;
        self.human = 0;
        self.special = 0;
        self.people.forEach(function (item){
          if(item.dead){
            if(item.identity == '狼人'){
              self.wolfMan++
            }
            else if(item.identity == '村民'){
              self.human++
            }
            else{
              self.special++
            }
          }
        })
        self.showWin()
      },
      readyGame: function(){
        self = this;

        this.people.forEach(function (item){
          if(item.identity == '狼人'){
            self.allWolf++;
          }
          else if(item.identity == '村民'){
            self.allHuman++;
          }
          else{
            self.allSpecial++;
          }
        })
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/css/common.scss";

  .card {
    height: auto;
    background: #ffffff;
    /*border-radius: 12px;*/
    box-shadow: px2rem(0px) px2rem(0px) px2rem(8px) px2rem(2px) #7d7d7d;

  .pic {
    height: px2rem(220px);
    /*border-radius: 12px 12px 0 0;*/
    background: url("http://zhuoyouba.net/uploadfile/2014/0422/20140422025637278.jpg");
    background-size: cover;
  }

  .identity {
    text-align: center;
    font-size: 16px;
    margin: px2rem(10px);
  }

  .code {
    text-align: center;
    font-size: 16px;
    margin: px2rem(10px);
  }

  }
  .action-bar{
    text-align: center;
  }
  .die{
    background: #8f0000;
    color: #dddddd;
    border: 0;
    padding: px2rem(10px);
    width: px2rem(220px);
  }
</style>
