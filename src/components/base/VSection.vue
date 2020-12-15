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
  padding: 8rem 4rem;

  @include media('<tablet') {
    padding: 4rem 2rem;
  }

  @include media('<phone') {
    padding: 2rem 1rem;
  }

  &__content {
    position: relative;
    align-items: center;
    justify-content: center;
    max-width: 1280px;
    padding: var(--rem--xl);
    margin: auto;

    @extend %grid;
    @extend %grid--widths;
    @extend %grid--guttered;
    @extend %grid--guttered--xl;
  }

  &__container {
    &-text {
      @extend %cell--width--60;
      order: 2
    }

    &-image {
      @extend %cell--width--40;
      min-width: 0;
      min-height: 0;
      width: 100%;
      height: 100%;
      max-width: 382px;
      order: 3;

      &--is-left {
        order: 1
      }
    }
  }
}

</style>
