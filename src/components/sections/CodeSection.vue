<template>
  <div class="code-section">
    <v-section
      class="code-section__content"
    >
      <template #text>
        <section-text
          is-text-inverted
        >
          <template #section-title>
            {{ $t('sections.code.sectionTitle') }}
          </template>
          <template #title>
            {{ $t('sections.code.title') }}
          </template>
          <template #byline>
            {{ $t('sections.code.byline') }}
          </template>
          <template #description>
            {{ $t('sections.code.description') }}
          </template>
        </section-text>
      </template>
      <template #image>
        <div class="code-section__feature">
          <!-- eslint-disable-next-line -->
          <pre
            id="code-section__feature-text-editor"
            class="code-section__feature-text-editor text-editor"
          >
<span class="text-editor--blue">&lt;</span><span class="text-editor--red">script</span><span class="text-editor--blue">&gt;</span>
<span class="text-editor--blue">import</span><span> AttentionToDetails </span><span class="text-editor--blue">from '</span><span class="text-editor--green">@/components/MakingsOfTheGearing</span><span class="text-editor--blue">'</span>
<span class="text-editor--blue">import</span><span> ProductionApplicationExperience </span><span class="text-editor--blue">from '</span><span class="text-editor--green">@/components/MakingsOfTheGearing</span><span class="text-editor--blue">'</span>
<span />
<span class="text-editor--blue">export default {</span>
  <span class="text-editor--red">name</span><span class="text-editor--blue">: '</span><span class="text-editor--green">AlexGearing</span><span class="text-editor--blue">',</span>
  <span class="text-editor--red">components</span><span class="text-editor--blue">: {</span><span> AttentionToDetails</span><span class="text-editor--blue">, </span><span>ProductionApplicationExperience</span><span class="text-editor--blue"> },</span>
  <span class="text-editor--red">data </span><span class="text-editor--blue">() {</span>
    <span class="text-editor--blue">return {</span>
      <span class="text-editor--red">availableDisciplines</span><span class="text-editor--blue">: {</span>
        <span class="text-editor--red">frontEnd</span><span class="text-editor--blue">: '</span><span class="text-editor--green">advanced</span><span class="text-editor--blue">',</span>
        <span class="text-editor--red">backEnd</span><span class="text-editor--blue">: '</span><span class="text-editor--green">intermediate</span><span class="text-editor--blue">',</span>
        <span class="text-editor--red">businessEnd</span><span class="text-editor--blue">: '</span><span class="text-editor--green">customer first</span><span class="text-editor--blue">',</span>
        <span class="text-editor--red">weekEnd</span><span class="text-editor--blue">: '</span><span class="text-editor--green">football defender</span><span class="text-editor--blue">',</span>
      <span class="text-editor--blue">},</span>
    <span class="text-editor--blue">}</span>
  <span class="text-editor--blue">}</span>
<span class="text-editor--blue">}</span>
<span />
<span class="text-editor--blue">&lt;</span><span class="text-editor--red">script</span><span class="text-editor--blue">&gt;</span>
          </pre>
          <div class="code-section__feature-circle--large">
            <div class="code-section__feature-circle--small" />
          </div>
        </div>
      </template>
    </v-section>
  </div>
</template>

<script>
import TypeIt from 'typeit'

import SectionText from './components/SectionText.vue'

export default {
  name: 'CodeSection',
  components: {
    SectionText,
  },
  mounted () {
    this.animateTextEditor()
  },
  methods: {
    animateTextEditor () {
      // eslint-disable-next-line
      const typed = new TypeIt('#code-section__feature-text-editor', {
        speed: 25,
        waitUntilVisible: true,
      }).go()
    },
  },
}
</script>

<style lang="scss" scoped>

.code-section {
  background-color: #1A1E2C;
  position: relative;
  padding: 12rem 4rem;

  &__feature {
    position: relative;

    &-text-editor {
      position: relative;
      color: #D5D9F0;
      font-family: var(--font-family--monospace);
      font-size: var(--font-size--s);
      background-color: #282D3F;
      border-radius: var(--rem--b);
      width: 83.5%;
      height: 60%;
      margin-right: 16.5%;
      top: 20%;
      overflow: hidden;
      z-index: 300;
    }

    &-circle {
      &--large {
        position: absolute;
        background-color: #465382;
        border-radius: 50%;
        width: 83.5%;
        height: 83.5%;
        top: 8.25%;
        right: 0;
        z-index: 100;
      }
      &--small {
        position: absolute;
        right: 0;
        background-color: #F9D5E0;
        border-radius: 50%;
        width: 45%;
        height: 45%;
        z-index: 200;
      }
    }
  }
}

/deep/ .text-editor {
  &--red { color: #FF6774 }
  &--green { color: #8DEB81 }
  &--blue { color: #6BFFFF }
}

</style>
