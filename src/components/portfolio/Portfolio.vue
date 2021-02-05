<template>
    <v-layout row wrap>
      <StockSell v-for="stock in stocks" :key="stock.id" :stock="stock"/>
   </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import StockSell from './StockSell'

export default {
	components: {
		StockSell
	},
	computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        })
    }
	
}
</script>

<style>

</style>
