<template>
  <section class="v-section">
    <div
      class="v-section__content"
    >
      <slot />
    </div>
  </section>
</template>

<script>

// VSection is a responsive and reusable sectioning component.

export default {
  name: 'VSection',
}
</script>

<style lang="scss" scoped>

.v-section {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 8rem 4rem;

  @include media('<desktop') {
    padding: 4rem 2rem;
  }

  @include media('<phone') {
    padding: 2rem 1rem;
  }

  &__content {
    width: 1280px;
    max-width: 100%;
    position: relative;
  }
}

</style>
