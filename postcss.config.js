const purgecss = require('@fullhuman/postcss-purgecss')({
  // https://egghead.io/lessons/tailwind-remove-unused-css-with-purgecss?pl=introduction-to-tailwind-and-the-utility-first-workflow-0b697b10
  // https://tailwindcss.com/docs/controlling-file-size/#app
  content: ['./src/**/*.js', './public/index.html'],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
  ]
}
