<template>
  <div
    class="code-section"
  >
    <v-section
      id="development"
      ref="animate"
      :text-width="50"
      class="code-section__content"
    >
      <section-content>
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
            <template #iconImages>
              <img
                src="@/assets/images/icons/development/vue.svg"
                alt="basecamp logo"
              >
              <img
                src="@/assets/images/icons/development/react.svg"
                alt="jira logo"
              >
              <img
                src="@/assets/images/icons/development/html.svg"
                alt="linear logo"
              >
              <img
                src="@/assets/images/icons/development/js.svg"
                alt="notion logo"
              >
              <img
                src="@/assets/images/icons/development/css.svg"
                alt="sketch logo"
              >
              <img
                src="@/assets/images/icons/development/github.svg"
                alt="figma logo"
              >
            </template>
            <template #footer>
              <p>{{ $t('sections.code.footer.pre') }}</p>
              <button
                class="code-section__button button button--primary"
                @click.prevent="handleButtonClick"
              >
                {{ $t('sections.code.footer.button') }}
              </button>
            </template>
          </section-text>
        </template>
        <template #image>
          <div class="code-section__feature">
            <div class="code-section__feature-container">
              <pre class="code-section__feature-text-editor">
              <div class="text-editor__numbers">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
                <span>12</span>
                <span>13</span>
                <span>14</span>
                <span>15</span>
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>19</span>
                <span>20</span>
                <span>21</span>
                <span>22</span>
              </div>
              <span
                id="text-editor__typing-area"
                class="text-editor text-editor__typing-area "
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
  <span class="text-editor--blue">&lt;/</span><span class="text-editor--red">script</span><span class="text-editor--blue">&gt;</span>
              </span>
            </pre>
            </div>
            <circle-illustration class="code-section__feature-circle" />
          </div>
        </template>
      </section-content>
    </v-section>
  </div>
</template>

<script>
import TypeIt from 'typeit'

import FadeAnimationMixin from '@/mixins/FadeAnimationMixin'
import CircleIllustration from '@/assets/images/illustrations/circle--illustration.svg?inline'
import SectionContent from './components/SectionContent.vue'
import SectionText from './components/SectionText.vue'

export default {
  name: 'CodeSection',
  components: {
    CircleIllustration,
    SectionContent,
    SectionText,
  },
  mixins: [FadeAnimationMixin],

  mounted () {
    this.$_setFadeTransition(this.$refs.animate)
    this.animateTextEditor()
  },

  methods: {
    animateTextEditor () {
      // eslint-disable-next-line
      const typed = new TypeIt('#text-editor__typing-area', {
        speed: 20,
        waitUntilVisible: true,
      }).go()
    },
    handleButtonClick () {
      window.open('https://github.com/alexgearing/alexgearing-website')
    },
  },
}
</script>

<style lang="scss" scoped>

.code-section {
  --line-height--text-editor: 1.4;

  background-color: #1A1E2C;
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

  &__button {
    box-shadow: unset;
  }

  &__feature {
    position: relative;

    &-container {
      position: relative;
      width: 83.5%;
      height: 60%;
      max-height: 60%;
      margin-right: 16.5%;
      top: 20%;
    }

    &-text-editor {
      position: relative;
      display: flex;;
      color: #D5D9F0;
      font-family: var(--font-family--monospace);
      font-size: var(--font-size--s);
      background-color: #282D3F;
      border-radius: var(--rem--b);
      padding: var(--rem--b) 0;
      z-index: 300;
    }

    &-circle {
      position: absolute;
      top: -15%;
      right: -7.5%;
      width: 100%;
      height: auto;
    }
  }
}

.text-editor {
  line-height: var(--line-height--text-editor);

  &__numbers {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 var(--rem--b);
    color: #55718d;
    white-space: normal;

    > * {
      line-height: var(--line-height--text-editor);
    }
  }

  &__typing-area {
    padding-right: var(--rem--b);
    overflow: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }
}

/deep/ .text-editor {
  &--red { color: #FF6774 }
  &--green { color: #8DEB81 }
  &--blue { color: #6BFFFF }
}

</style>
