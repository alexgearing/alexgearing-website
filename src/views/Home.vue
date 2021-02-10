<template>
  <div class="home-view">
    <nav-bar />
    <hero-section />
    <product-section />
    <code-section />
    <experience-section />
    <the-footer />
  </div>
</template>

<script>
import NavBar from '@/components/ui/NavBar'
import TheFooter from '@/components/ui/TheFooter'

import CodeSection from '@/components/sections/CodeSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import HeroSection from '@/components/sections/HeroSection'
import ProductSection from '@/components/sections/ProductSection'

export default {
  name: 'Home',
  components: {
    CodeSection,
    ExperienceSection,
    HeroSection,
    NavBar,
    ProductSection,
    TheFooter,
  },
}
</script>

<style>

</style>
