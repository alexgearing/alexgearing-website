<template>
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
  </div>
</template>

<script>
export default {
  name: 'SectionText',
  props: {
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

  &__section-title {
    color: var(--color--primary);
    font-weight: var(--font-weight--bold);
  }

  &__title {
    font-size: var(--font-size--xxxl);
  }

  &__byline {
    font-size: var(--font-size--l);
    font-weight: var(--font-weight--medium);
  }

  &__description {
    font-weight: var(--font-weight--regular);
  }
}

</style>
