<template>
  <div
    :class="[
      'section-text',
      `section-text--text-align--${textAlign}`,
      { 'section-text--text-inverted': isTextInverted},
    ]"
  >
    <span
      v-if="$slots['section-title']"
      class="section-text__section-title"
    >
      <slot name="section-title" />
    </span>
    <h2
      v-if="$slots.title"
      class="section-text__title"
    >
      <slot name="title" />
    </h2>
    <p
      v-if="$slots.byline"
      class="section-text__byline"
    >
      <slot name="byline" />
    </p>
    <p
      v-if="$slots.description"
      class="section-text__description"
    >
      <slot name="description" />
    </p>
    <div
      v-if="$slots.iconImages"
      class="section-text__icon-images"
    >
      <slot name="iconImages" />
    </div>
    <div
      v-if="$slots.footer"
      class="section-text__footer"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionText',
  props: {
    iconImages: {
      default: () => [],
      type: Array,
    },
    isTextInverted: {
      type: Boolean,
      default: false,
    },
    textAlign: {
      type: String,
      default: 'left',
      validator: (v) => ['left', 'center', 'right'].includes(v),
    },
  },
}
</script>

<style lang="scss" scoped>

.section-text {
  &--text-align {
    &--left { text-align: left; }
    &--center { text-align: center; }
    &--right { text-align: right; }
  }

  &--text-inverted {
    color: var(--color--text-inverted);
  }

  &__section-title {
    font-size: var(--font-size--l);
    color: var(--color--primary);
    font-weight: var(--font-weight--bold);
  }

  &__title {
    font-size: var(--font-size--xxxl);
    margin: var(--rem--b) 0;
  }

  &__byline {
    font-size: var(--font-size--l);
    font-weight: var(--font-weight--medium);
  }

  &__description {
    font-weight: var(--font-weight--regular);
  }

  &__icon-images {
    > * {
      padding: var(--rem--xxxs) var(--rem--xs);
    }
  }
}

</style>
