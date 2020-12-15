<template>
  <div class="home-view">
    <nav-bar />
    <hero-section />
    <product-section />
    <code-section />
  </div>
</template>

<script>
import NavBar from '@/components/ui/NavBar'
import HeroSection from '@/components/sections/HeroSection'
import ProductSection from '@/components/sections/ProductSection'
import CodeSection from '@/components/sections/CodeSection'

export default {
  name: 'Home',
  components: {
    NavBar,
    HeroSection,
    ProductSection,
    CodeSection,
  },
}
</script>

<style>

</style>
