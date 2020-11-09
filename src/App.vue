<template>
  <div id="app">
    <div class="app__container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.app {
  &__container {
    min-width: 0;
    max-width: 1280px;
    margin: auto;
  }
}

</style>
