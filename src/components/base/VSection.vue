<template>
  <section class="v-section">
    <div class="v-section__content">
      <div class="v-section__container-text">
        <slot name="text" />
      </div>
      <div
        :class="[
          'v-section__container-image',
          { 'v-section__container-image--is-left': hasImageOnLeft }
        ]"
      >
        <slot name="image" />
      </div>
    </div>
  </section>
</template>

<script>

// VSection is a repsonsive and reusable sectioning component.

export default {
  name: 'VSection',
  props: {
    hasImageOnLeft: { type: Boolean, default: false },
  },
}
</script>

<style lang="scss" scoped>

.v-section {
  position: relative;
  padding: 12rem 4rem;

  &__content {
    background-color: #FFFFFF;
    border-radius: 64px;
    align-items: center;
    position: relative;
    display: flex;
    justify-content: space-around;
    max-width: 1280px;
    padding: var(--rem--xl);
    margin: auto;
  }

  &__container {
    &-text {
      order: 2
    }

    &-image {
      order: 3

      &--is-left {
        order: 1
      }
    }
  }
}

</style>
