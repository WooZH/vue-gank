<template>
  <div id="about">
    <div class="about">

      <p>
        <span class="title">游戏背景：</span>
        在一个美丽的小村庄里，潜伏着可怕的狼人！每天晚上，都有一个善良的村民成为狼人的牺牲品。但是，村民们不会坐以待毙，试图在白天找到这些狼人并处决他们。
        <br><br>
        <span class="title">游戏人数：</span>

        8-18 <br><br>

        <span class="title">游戏角色：</span>

        所有卡牌包括： <br>
      <ul>
        <li>
          4张狼人(Werewolves)
        </li>
        <li>13张普通村民(Ordinary Townsfolk/villager)</li>
        <li>1张预言家(Fortune Teller/Seer)</li>
        <li>1张盗贼(Thief)</li>
        <li>1张猎人(Hunter)</li>
        <li>1张丘比特(Cupido)</li>
        <li>1张女巫(Witch)</li>
        <li>1张小女孩(Little Girl)</li>
        <li>1张警长标志牌(Sheriff)</li>
      </ul>
      <br>
       <span class="title">
        游戏目标</span>
      <br>
      村民的目标：白天的时候处决所有的狼人。<br>
      狼人的目标：黑夜的时候杀死所有的村民。<br>
      各种人物角色<br>
      预言家：天黑时睁眼，一晚可以查看一名玩家的身份。<br>
      猎人：如果猎人正常死亡时（被处决或被狼人杀害），临死前可以进行射击，指定任意一个活着的玩家，该玩家立即死掉（出局）。但是如果被女巫毒死，情侣殉情或其他形式死亡，则不可射击（主持人提醒一下）。
      <br>
      丘比特：在游戏开始的第一个晚上，指定两名玩家，这两人成为两名情侣（不限性别）。丘比特可以指定自己为两名情侣之一。两名情侣中的一个死去时，另一名也立即死去，并且没有遗言。投票时，一名情侣不得把票投给另一名情侣。如果两名情侣，一个是狼人，另一个是村人，这两名玩家游戏的目标就改变了，他们要把其余所有玩家都杀死（包括狼人和村人）。
      <br>
      女巫：有两种药剂，一种是解药，可以救人，让天黑时被狼人杀死的人活过来；另一种是毒药，在天黑时可以杀死一个人。在整个游戏过程中，每一种药剂只能使用一次。(女巫不可以自救，可以自杀，当女巫用过解药之后，上帝将不再告诉她死者是谁。)
      <br>
      小女孩：在夜晚，狼人睁眼的时候，小女孩可以悄悄睁眼，看谁是狼人。如果在夜晚，狼人发现了小女孩，小女孩立即死亡，那个晚上，狼人就不能杀其他人，只把小女孩杀死。当然狼人也可以选择不杀死小女孩，那样会很危险。（主持人很难控制，建议不加此角色）
      <br>
      警长：警长的身份不是通过发牌得到的，而是第一个白天大家各自发表意见之后由村人投票选举出来的。白天投票时，警长的一票以2票来计算。如果警长被杀，则警长临死时可以指定一名活着的玩家作为他的继任者，担任警长。被选作警长的玩家有2张牌，一张牌面向下放在自己面前（游戏一开始发的），另一张是警长牌。
      <br>
      盗贼：如果使用盗贼，则在游戏开始时，多加入两张普通村民卡。这样玩家拿取身份牌后，会多出两张牌，牌面向下放在桌子中央。在第一个晚上，盗贼观看这两张牌，可以把自己的身份牌和其中一张交换，此后盗贼就扮演交换过来的身份，当然也可以不交换，不交换的话，接下来盗贼就和普通村民没区别。但是，如果这两张牌都是狼人，则盗贼必须把自己的身份牌和其中一张交换，也就是盗贼必须成为狼人。
      <br>
      游戏中，狼人、预言家、村民是必须要使用的，其余角色根据游戏人数可适当加入
      </p>
    </div>

    <div class="backHome" @click="backHome()"><</div>
  </div>
</template>

<script>
  /* eslint-disable */

  import topBar from '../components/topBar.vue'

  export default {
    name: 'test',
    components: {
      topBar
    },
    // define methods under the `methods` object
    watch: {
      '$route': 'fetchData'
    },
    methods: {

      fetchData: function () {
        console.log('test!')
      },
      backHome: function() {
        this.$router.push( {
          name: 'start'
        })
      }
    }
  }
</script>

<style src="../assets/css/about.scss" lang="scss" scoped>
</style>
