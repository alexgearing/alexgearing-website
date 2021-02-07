<template>
  <footer class="the-footer">
    <span class="the-footer__text">{{ $t('components.footer.memo') }}</span>
    |
    <span class="the-footer__text">{{ $t('components.footer.legal') }}</span>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',

}
</script>

<style lang="scss" scoped>

.the-footer {
  display: flex;
  justify-content: center;
  text-align: center;
  padding: var(--rem--xl) var(--rem--b);
  color: #FFFFFF;
  background-color: #1A1E2C;

  &__text {
    padding: 0 var(--rem--s);
  }
}

</style>
