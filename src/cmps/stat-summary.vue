<template>
    <section v-if="summaryData" class="section">
      <div class="grid-container">
        <StatCard v-for="stat in summaryData" :key="stat.title" :stat="stat" class="stat-card" />
      </div>
    </section>
  </template>
  

<script>
import StatCard from './stat-card.vue';
StatCard
export default {
    components: { StatCard },
    props: {
        summaryData: {
            type: Array,
            length: 4,
            required: true,
        },
    },
}
</script>