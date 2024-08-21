<script>
import AppFooter from './cmps/app-footer.vue'
import AppHeader from './cmps/app-header.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
  },
}

</script>

<template>
  <AppHeader />
  <main class="app-container">
    <RouterView />
  </main>
  <AppFooter />
</template>

<style scoped>
main {
  min-height: 87vh;
}

nav a {
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}
</style>
