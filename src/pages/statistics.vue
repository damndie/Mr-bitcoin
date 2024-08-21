<template>
  <div v-if="loaded" class="statistics-container">
    <h1 class="flex justify-center fs43">Statistics</h1>
    <StatsSummary :summaryData="summaryData" />
    <div class="h-96">
      <LineChart :data="chartData" />
    </div>
  </div>
</template>

<script>
import { bitcoinService } from "../services/bitcoin.service.js";
import lineChart  from "../cmps/line-chart.vue";
import statsSummary from "../cmps/stat-summary.vue";


export default {
  data: () => ({
    loaded: false,
    chartData: null,
    summaryData: null,
  }),
  async created() {
    this.loaded = false;
    try {
      const btcData = await bitcoinService.getMarketPriceHistory()
      const btcSummary = await bitcoinService.getMarketStats()
      this.summaryData = btcSummary
      this.chartData = btcData
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  },
  components: {
    LineChart: lineChart,
    StatsSummary: statsSummary,

  }

};
</script>

<style scoped>

</style>