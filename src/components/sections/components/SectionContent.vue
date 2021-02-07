<template>
  <div
    :class="[
      'section-content',
      { 'section-content--is-left': !hasImageOnLeft }
    ]"
  >
    <div
      :class="[
        'section-content__container',
        'section-content__container-text',
        `section-content__container-text--width--${textWidth}`,
      ]"
    >
      <slot name="text" />
    </div>
    <div
      :class="[
        'section-content__container',
        'section-content__container-image',
        { 'section-content__container-image--is-left': hasImageOnLeft }
      ]"
    >
      <slot name="image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionContent',

  props: {
    hasImageOnLeft: { type: Boolean, default: false },
    textWidth: { type: Number, default: 60 },
  },
}
</script>

<style lang="scss" scoped>

.section-content {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;

  @include media('<desktop') {
    flex-direction: column;

    &--is-left {
      flex-direction: column-reverse;
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

      @include media ('<=tablet') {
        width: 90vw;
        max-width: 420px;
      }

      &--is-left {
        order: 1;
      }
    }
  }
}

</style>
