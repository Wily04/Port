module.exports = {
    plugins: [
      require('@fullhuman/postcss-purgecss')({
        content: ['./index.html', './src/**/*.vue', './src/**/*.js'],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      }),
      require('cssnano')() // Para minificar
    ]
  };
  