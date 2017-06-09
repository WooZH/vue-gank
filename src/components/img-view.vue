<template>
  <div class="imgBox" @click="close()">
    <img class="viewImg" :src="imgUrl" alt="">
  </div>

</template>

<script>
  export default {
    name: 'imgView',
    data () {
      return {
        title: 'imgView',
      }
    },
    props: ['imgUrl'],
    methods: {
      close: function(){
        console.log('close');
        this.$emit('close')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/css/common.scss";
  .imgBox{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);

    z-index: 10000;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .middle{
    height: 100%;
    line-height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
  .viewImg{
    width: 100%;
    height: auto;
    vertical-align: middle;
  }
</style>
