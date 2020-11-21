<template>
  <div class="home-view">
    <nav-bar />
    <hero-section />
  </div>
</template>

<script>
import NavBar from '@/components/ui/NavBar'
import HeroSection from '@/components/sections/HeroSection'

export default {
  name: 'Home',
  components: {
    NavBar,
    HeroSection,
  },
}
</script>

<style>

</style>
