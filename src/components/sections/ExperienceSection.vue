<template>
  <div
    id="experience"
    class="experience-section"
  >
    <v-section
      class="experience-section__content"
    >
      <agile
        ref="carousel"
        :nav-buttons="false"
        :dots="false"
        :autoplay-speed="5000"
        :speed="900"
        fade
        pause-on-hover
        pause-on-dots-hover
        autoplay
        @after-change="handleAfterChange"
      >
        <section-content
          key="valiant"
          class="slide"
          has-image-on-left
        >
          <template #image>
            <img
              rel="preload"
              class="experience-section__feature-image"
              src="@/assets/images/illustrations/experience--valiant.png"
              alt="Blue and pink circular graphic with picture of Alex Gearing inside."
            >
          </template>
          <template #text>
            <section-text
              text-align="right"
            >
              <template #section-title>
                {{ $t('sections.experience.valiant.sectionTitle') }}
              </template>
              <template #title>
                {{ $t('sections.experience.valiant.title') }}
              </template>
              <template #byline>
                {{ $t('sections.experience.valiant.byline') }}
              </template>
              <template #description>
                {{ $t('sections.experience.valiant.description') }}
              </template>
            </section-text>
          </template>
        </section-content>
        <section-content
          key="university"
          class="slide"
          has-image-on-left
        >
          <template #image>
            <img
              rel="preload"
              class="experience-section__feature-image"
              src="@/assets/images/illustrations/experience--university.png"
              alt="Blue and pink circular graphic with picture of Alex Gearing inside."
            >
          </template>
          <template #text>
            <section-text
              text-align="right"
            >
              <template #section-title>
                {{ $t('sections.experience.university.sectionTitle') }}
              </template>
              <template #title>
                {{ $t('sections.experience.university.title') }}
              </template>
              <template #byline>
                {{ $t('sections.experience.university.byline') }}
              </template>
              <template #description>
                {{ $t('sections.experience.university.description') }}
              </template>
            </section-text>
          </template>
        </section-content>
        <section-content
          key="personal"
          class="slide"
          has-image-on-left
        >
          <template #image>
            <img
              rel="preload"
              class="experience-section__feature-image"
              src="@/assets/images/illustrations/experience--personal.png"
              alt="Blue and pink circular graphic with picture of Alex Gearing inside."
            >
          </template>
          <template #text>
            <section-text
              text-align="right"
            >
              <template #section-title>
                {{ $t('sections.experience.personal.sectionTitle') }}
              </template>
              <template #title>
                {{ $t('sections.experience.personal.title') }}
              </template>
              <template #byline>
                {{ $t('sections.experience.personal.byline') }}
              </template>
              <template #description>
                {{ $t('sections.experience.personal.description') }}
              </template>
            </section-text>
          </template>
        </section-content>
      </agile>
      <div class="experience-section__section-selector">
        <a
          :class="[
            'experience-section__section-selector-link',
            { 'experience-section__section-selector-link--active': currentSlide === 0 }
          ]"
          @click="$refs.carousel.goTo(0)"
        >{{ $t('sections.experience.selector.experience') }}</a> –
        <a
          :class="[
            'experience-section__section-selector-link',
            { 'experience-section__section-selector-link--active': currentSlide === 1 }
          ]"
          @click="$refs.carousel.goTo(1)"
        >{{ $t('sections.experience.selector.university') }}</a> –
        <a
          :class="[
            'experience-section__section-selector-link',
            { 'experience-section__section-selector-link--active': currentSlide === 2 }
          ]"
          @click="$refs.carousel.goTo(2)"
        >{{ $t('sections.experience.selector.projects') }}</a>
      </div>
    </v-section>
  </div>
</template>

<script>
import SectionText from './components/SectionText.vue'
import SectionContent from './components/SectionContent.vue'

export default {
  name: 'ExperienceSection',
  components: {
    SectionContent,
    SectionText,
  },

  data () {
    return {
      currentSlide: 1,
    }
  },

  methods: {
    handleAfterChange (e) {
      this.currentSlide = e.currentSlide
    },
  },
}
</script>

<style lang="scss" scoped>

.experience-section {
  background-color: #FFE7EE;
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
    /deep/ .v-section__content {
      background-color: #FFFFFF;
      border-radius: 64px;
    }
  }

  &__feature-image {
    width: 100%;
    height: 100%;
  }

  &__section-selector {
    width: 100%;
    margin-bottom: var(--rem--l);
    text-align: center;
    font-size: var(--font-size--m);

    &-link {
      color: var(--color--text);

      &:hover {
        text-decoration: underline;
      }

      &--active {
        color: var(--color--primary);
        font-weight: var(--font-weight--bold);
      }
    }
  }
}

</style>
