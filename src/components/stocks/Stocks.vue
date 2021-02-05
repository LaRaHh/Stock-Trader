<template>
   <v-layout row wrap>
      <StockBuy v-for="stock in stocks" :key="stock.id" :stock="stock"/>
   </v-layout>
</template>

<script>
import StockBuy from './StockBuy'
export default {
   components: {
      StockBuy
   },
   computed: {
      stocks(){
         return this.$store.getters.stocks
      }
   }
}
</script>

<style>

</style>
