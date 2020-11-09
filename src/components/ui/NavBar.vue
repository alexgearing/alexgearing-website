<template>
  <header class="nav-bar">
    <div class="nav-bar__section">
      <img
        class="nav-bar__logo"
        src="@/assets/images/logos/ag--initials.svg"
        alt="Alex Gearing logo displayed as initals"
      >
      <a
        class="nav-bar__item"
        href=""
      >
        {{ $t('components.navBar.links.about') }}
      </a>
      <a
        class="nav-bar__item"
        href=""
      >
        {{ $t('components.navBar.links.experience') }}
      </a>
      <a
        class="nav-bar__item"
        href=""
      >
        {{ $t('components.navBar.links.placeholder') }}
      </a>
    </div>
    <div class="nav-bar__section">
      <a
        class="nav-bar__item"
        href=""
      >
        {{ $t('components.navBar.languageSwitcher') }}
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style lang="scss" scoped>

.nav-bar {
  display: flex;
  justify-content: space-around;
  padding: var(--rem--xl) var(--rem--xxxl);

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

  &__item {
    padding: var(--rem--b);
    text-transform: uppercase;
    font-weight: var(--font-weight--button);
    color: var(--color--text);
  }
}

</style>
