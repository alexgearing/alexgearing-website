<template>
  <header class="nav-bar">
    <div class="nav-bar__section">
      <img
        class="nav-bar__logo"
        src="@/assets/images/logos/ag--initials.svg"
        alt="Alex Gearing logo displayed as initals"
      >
      <div class="nav-bar__items">
        <a
          class="nav-bar__item"
          href="#product"
        >
          {{ $t('components.navBar.links.product') }}
        </a>
        <a
          class="nav-bar__item"
          href="#development"
        >
          {{ $t('components.navBar.links.development') }}
        </a>
        <a
          class="nav-bar__item"
          href="#experience"
        >
          {{ $t('components.navBar.links.experience') }}
        </a>
      </div>
    </div>
    <div class="nav-bar__section">
      <span class="nav-bar__switch-icon"><img
        src="@/assets/images/icons/uk-flag.svg"
        alt="United Kingdom flag icon"
      ></span>
      <label class="nav-bar__switch">
        <input
          v-model="currentLocale"
          class="nav-bar__switch-input"
          type="checkbox"
        >
        <span class="nav-bar__switch-slider" />
      </label>
      <span class="nav-bar__switch-icon"><img
        src="@/assets/images/icons/german-flag.svg"
        alt="German flag icon"
      ></span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    currentLocale: {
      get () {
        return this.$i18n.locale === 'de'
      },
      set (value) {
        this.$i18n.locale = value ? 'de' : 'en'
      },
    },
  },
}
</script>

<style lang="scss" scoped>

.nav-bar {
  display: flex;
  justify-content: space-between;
  padding: var(--rem--xl);

  @include media('<tablet') {
    padding: var(--rem--xl) var(--rem--xl);
  }

  &__section {
    display: flex;
    align-items: center;
  }

  &__logo {
    width: 6rem;
    max-width: 6rem;
    padding-right: var(--rem--b);
  }

  &__items {
    @include media('<tablet') {
      display: none;
    }
  }

  &__item {
    padding: var(--rem--b);
    text-transform: uppercase;
    font-weight: var(--font-weight--button);
    color: var(--color--text);
  }

  &__switch {
    position: relative;
    display: inline-block;
    margin: 0 var(--rem--s);
    width: 60px;
    height: 34px;

    &-icon {
      height: var(--rem--m);
      width: var(--rem--m);
    }

    &-input {
      opacity: 0;
      width: 0;
      height: 0;

      &:checked + .nav-bar__switch-slider:before {
        transform: translateX(26px);
      }
    }

    &-slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #D8EEF7;
      transition: .4s;
      border-radius: 34px;

      &:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
      }
    }
  }
}

</style>
