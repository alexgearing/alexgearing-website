import anime from 'animejs/lib/anime.es.js'

export default {
  methods: {
    $_setFadeTransition (vm) {
      const fadeTransition = anime({
        targets: vm.$el,
        duration: 1000,
        easing: 'easeOutCubic',
        opacity: [0, 1],
        translateY: ['20vh', 0],
        autoplay: false,
      })

      const observerOptions = {
        root: null,
        threshold: 0,
      }

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            fadeTransition.play()
            observer.unobserve(entry.target)
          }
        })
      }, observerOptions)

      observer.observe(vm.$el)
    },
  },
}
