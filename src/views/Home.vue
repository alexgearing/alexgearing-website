<template>
  <div class="home-view">
    <nav-bar />
    <hero-section />
    <product-section />
    <code-section />
    <the-footer />
  </div>
</template>

<script>
import NavBar from '@/components/ui/NavBar'
import TheFooter from '@/components/ui/TheFooter'
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
    TheFooter,
  },
}
</script>

<style>

</style>
