// next.config.js
// const withCSS = require('@zeit/next-css');

const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');

module.exports = withFonts(withCSS({
   enableSvg: true,
   webpack(config, options) {
     return config;
   }
 }
)); 