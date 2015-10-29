var Merge = require('broccoli-merge-trees');
var Sass = require('broccoli-sass');

var stylePaths = [
  'sass',
  'bower_components/normalize-css',
  'bower_components/font-awesome/scss',
  'bower_components/neat/app/stylesheets',
  'bower_components/bourbon/app/stylesheets',
];

var styles = new Sass(stylePaths, 'app.scss', 'app.css');

module.exports = new Merge(['public', styles, 'bower_components/font-awesome/fonts'], { overwrite: true });
