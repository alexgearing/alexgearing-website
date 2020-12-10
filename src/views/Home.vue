<template>
  <div class="home-view">
    <nav-bar />
    <hero-section />
    <product-section />
  </div>
</template>

<script>
import NavBar from '@/components/ui/NavBar'
import HeroSection from '@/components/sections/HeroSection'
import ProductSection from '@/components/sections/ProductSection'

export default {
  name: 'Home',
  components: {
    NavBar,
    HeroSection,
    ProductSection,
  },
}
</script>

<style>

</style>
