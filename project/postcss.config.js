// postcss.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'), // Use @tailwindcss/postcss as a plugin
    require('autoprefixer'), // Optional: for automatic vendor prefixes
  ],
};

