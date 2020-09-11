const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  style: {
    postcss: {
      plugins: [
        purgecss({
					content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
					whitelist: ['html', 'head', 'body', 'section', 'div', 'active', 'icon', 'show'],
					whitelistPatterns: [/^nav/, /^container/, /^collapse/, /^ml-/, /^fade/, /^animation/, /^row/, /^col/, /^employment/, /^education/],
					whitelistPatternsChildren: [/^nav/, /^container/, /^collapse/, /^ml-/, /^fade/, /^animation/, /^row/, /^col/, /^employment/, /^education/]
        }),
      ],
    },
  },
}
