module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-preset-env')({ stage: 1 }),
    // In production, minify CSS
    ...(process.env.NODE_ENV === 'production'
      ? [ require('cssnano')({ preset: 'default' }) ]
      : []),
  ]
}
