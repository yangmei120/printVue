<template>
  <div class="custom">
    <div class="custom_tit">{{tit}}<span @click="jump">{{tit_span}}</span></div>
  </div>
</template>

<script>

  export default {
    props:{
      tit:{
        default:'账户余额'
      },
      tit_span:{

      }
    },
    methods:{
      jump(){
        this.$emit('custom-event')
      }
    }
  }
</script>

<style>
.custom_tit{
  line-height: 30px;
}
  .custom_tit span{
    float: right;
    cursor: pointer;
    font-size: 14px;
    color: blue;
  }
</style>

