<template>
  <div
    class="product-section"
  >
    <v-section
      id="product"
      ref="animate"
      has-image-on-left
      class="product-section__content"
    >
      <section-content>
        <template #image>
          <product-illustration class="product-section__feature" />
        </template>
        <template #text>
          <section-text
            text-align="right"
          >
            <template #section-title>
              {{ $t('sections.product.sectionTitle') }}
            </template>
            <template #title>
              {{ $t('sections.product.title') }}
            </template>
            <template #byline>
              {{ $t('sections.product.byline') }}
            </template>
            <template #description>
              {{ $t('sections.product.description') }}
            </template>
            <template #iconImages>
              <img
                src="@/assets/images/icons/product/basecamp.svg"
                alt="basecamp logo"
              >
              <img
                src="@/assets/images/icons/product/jira.svg"
                alt="jira logo"
              >
              <img
                src="@/assets/images/icons/product/linear.svg"
                alt="linear logo"
              >
              <img
                src="@/assets/images/icons/product/notion.svg"
                alt="notion logo"
              >
              <img
                src="@/assets/images/icons/product/sketch.svg"
                alt="sketch logo"
              >
              <img
                src="@/assets/images/icons/product/figma.svg"
                alt="figma logo"
              >
            </template>
          </section-text>
        </template>
      </section-content>
    </v-section>
    <div class="product-section__background">
      <img
        class="product-section__background-image"
        src="@/assets/images/illustrations/product--background.svg"
      >
    </div>
  </div>
</template>

<script>
import FadeAnimationMixin from '@/mixins/FadeAnimationMixin'
import ProductIllustration from '@/assets/images/illustrations/product--illustration.svg?inline'
import SectionContent from './components/SectionContent.vue'
import SectionText from './components/SectionText.vue'

import anime from 'animejs/lib/anime.es.js'

export default {
  name: 'ProductSection',
  components: {
    ProductIllustration,
    SectionContent,
    SectionText,
  },
  mixins: [FadeAnimationMixin],

  mounted () {
    this.$_setFadeTransition(this.$refs.animate)
    anime.timeline({
      easing: 'linear',
      loop: true,
    }).add({
      targets: '#animated-path-one',
      strokeDashoffset: [8, 0],
    }).add({
      targets: '#animated-path-two',
      strokeDashoffset: [0, 8],
    }, 0)

    anime.timeline({
      easing: 'easeInOutSine',
      loop: true,
      direction: 'alternate',
      duration: 1250,
    }).add({
      targets: '#animated-bubble-one',
      translateY: [41.442639, 31.442639],
    }).add({
      targets: '#animated-bubble-two',
      translateY: [0, -10],
    }, 0)
  },
}
</script>

<style lang="scss" scoped>

.product-section {
  background-color: #F2FBFF;
  position: relative;
  padding: 12rem 4rem;

  @include media ('<desktop') {
    padding: 6rem 2rem;
  }

  @include media ('<tablet') {
    padding: 4rem 2rem;
  }

  @include media ('<=phone') {
    padding: 2rem 1rem;
  }

  &__content {
    z-index: 200;
    ::v-deep .v-section__content {
      background-color: #FFFFFF;
      border-radius: 64px;
    }
  }

  &__background {
    position: absolute;
    width: 100vw;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 100;

    &-image {
      width: 100%;
      height: 100%;
      max-height: 100%;
    }
  }
}

</style>
