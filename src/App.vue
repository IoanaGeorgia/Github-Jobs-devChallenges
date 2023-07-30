<template>
  <div id="app">
    <p class='githubJobsTitle'><span class='githubJobsSpan'>Github</span> Jobs</p>
    <LandingPage />
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue'

export default {
  name: 'App',
  components: {
    LandingPage
  }
}
</script>

<style>
</style>
