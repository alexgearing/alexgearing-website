<template>
  <section class="v-section">
    <div
      :class="[
        'v-section__content',
        { 'v-section__content--is-left': !hasImageOnLeft }
      ]"
    >
      <div
        :class="[
          'v-section__container',
          'v-section__container-text',
          `v-section__container-text--width--${textWidth}`,
        ]"
      >
        <slot name="text" />
      </div>
      <div
        :class="[
          'v-section__container',
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
    textWidth: { type: Number, default: 60 },
  },
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
    position: relative;
    align-items: center;
    justify-content: center;
    max-width: 1280px;
    padding: var(--rem--xl);
    margin: auto;
    display: flex;
    flex-wrap: nowrap;
    margin: 0;
    padding: 0;

    @include media('<desktop') {
      flex-direction: column;

      &--is-left {
        flex-direction: column-reverse;
      }
    }
  }

  &__container {
    box-sizing: border-box;
    padding: var(--rem--xl);
    transition: all 1s ease;
    flex: 1;

    &-text {
      order: 2;

      @each $width, $percentage in $percentage-map {
        &[class*="width--#{$width}"] {
          @include media('>=desktop') {
            flex: 0 0 $percentage; max-width: $percentage;
          }
        }
      }
    }

    &-image {
      min-width: 0;
      min-height: 0;
      min-width: 300px;
      order: 3;

      @include media('<desktop') {
        width: 100%;
        max-width: 420px;
      }

      &--is-left {
        order: 1;
      }
    }
  }
}

</style>
