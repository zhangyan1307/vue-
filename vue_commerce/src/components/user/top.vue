<template>
    <div class="header">
         <header v-if="title=='购物车'" class="car">
             <i class="iconfont icon-houtui" @click="back"></i>
             <p>购物车</p>
             <span></span>
             </header>  
    </div>
</template>

<script>
    export default {
        props:['title'],
        methods:{
            back(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="stylus" scoped>
   .header{
       width 100%
       height px2rem(138)
       background-color #fe9900
       .car{
           display flex
           justify-content space-between
           line-height px2rem(138)
           font-size px2rem(40)
           padding-left px2rem(20)
           color #fff
       }
   }
</style>