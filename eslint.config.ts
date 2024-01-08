import antfu from '@antfu/eslint-config'

export default antfu({
  vue: {
    overrides: {
      'vue/block-lang': ['error', {
        script: { lang: ['ts', 'tsx'] },
      }],
    },
  },
  formatters: {
    css: true,
  },
})
