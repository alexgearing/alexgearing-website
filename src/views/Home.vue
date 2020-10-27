<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <animated-logo />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AnimatedLogo from '@/components/AnimatedLogo.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    AnimatedLogo,
  },
}
</script>
