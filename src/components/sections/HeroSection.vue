<template>
  <section class="hero-section">
    <transition
      name="slide-fade"
      appear
    >
      <div class="hero-section__content">
        <div class="hero-section__container hero-section__introduction">
          <span class="hero-section__introduction-text--first">{{ $t('sections.hero.greeting') }}</span>
          <div class="hero-section__introduction-tagline-container">
            <span class="hero-section__introduction-text--second">{{ $t('sections.hero.iAm') }}</span>
            <animated-logo class="hero-section__introduction-logo" />
          </div>
          <p class="hero-section__introduction-byline">
            {{ $t('sections.hero.byline') }}
          </p>
          <div class="hero-section__introduction-actions">
            <button class="button button--primary">
              {{ $t('sections.hero.actions.contact') }}
            </button>
            <button class="button button--secondary">
              {{ $t('sections.hero.actions.downloadCV') }}
            </button>
            <a
              class="hero-section__introduction-actions-linkedin--wrapper"
              target="_blank"
              href="https://www.linkedin.com/in/alexgearing/"
            >
              <img
                class="hero-section__introduction-actions-linkedin--image"
                src="@/assets/images/icons/linkedin.svg"
                alt="linked-in icon"
              >
            </a>
          </div>
        </div>
        <div class="hero-section__container">
          <img
            rel="preload"
            class="hero-section__image"
            src="@/assets/images/illustrations/hero--photo.png"
            alt="Blue and pink circular graphic with picture of Alex Gearing inside."
          >
        </div>
      </div>
    </transition>
    <div class="hero-section__background">
      <img
        class="hero-section__background-image"
        src="@/assets/images/illustrations/hero--background.svg"
      >
    </div>
  </section>
</template>

<script>
import AnimatedLogo from '@/components/sections/hero/AnimatedLogo'

export default {
  name: 'HeroSection',
  components: { AnimatedLogo },
}
</script>

<style lang="scss" scoped>

.hero-section {
  position: relative;
  padding: 4rem;

  &__content {
    align-items: center;
    position: relative;
    display: flex;
    justify-content: space-around;
    z-index: 200;
    max-width: 1280px;
    padding: var(--rem--xl);
    margin: auto;
  }

  &__introduction {
    &-text {
      &--first {
        font-size: 3rem;
        display: block;
        font-family: var(--font-family--title);
        font-weight: var(--font-weight---title);
      }

      &--second {
        padding-right: var(--rem--xxs);
        font-family: var(--font-family--title);
        font-weight: var(--font-weight--medium);
        font-style: italic;
        font-size: 2.8rem;
        z-index: 200;
      }
    }

    &-tagline-container {
      display: flex;
    }

    &-logo {
      display: inline;
    }

    &-byline {
      font-size: var(--font-size--m);
      font-weight: var(--font-weight--medium);
      margin-bottom: var(--rem--xl);
    }

    &-actions {
      display: flex;
      align-items: center;

      :not(:last-child) {
        margin-right: var(--rem--b);
      }

      &-linkedin {
        &--wrapper {
              box-shadow: 2px 5px 10px var(--color--shade);
    padding: var(--rem--s);
    border-radius: var(--border-radius--button);
        }

        &--image {
          color: var(--color--text);
          float: left;
          width: var(--rem--m);
          height: var(--rem--m);
          max-width: var(--rem--m);
          max-height: var(--rem--m);
        }
      }
    }
  }

  &__image {
    max-width: 512px;
  }

  &__background {
    position: absolute;
    width: 100vw;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 100;

    &-image {
      height: auto;
      width: 100%;
      height: 100%;
      max-height: 100%;
    }
  }
}

</style>
