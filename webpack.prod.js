const merge = require('webpack-merge');
const common = require('./webpack.common');
const config = require("./config/config.prod");

module.exports = merge(common(config), {
  mode: 'production',
});