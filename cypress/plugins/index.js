const cucumber = require('cypress-cucumber-preprocessor').default;
const webpack = require('@cypress/webpack-preprocessor');

module.exports = (on, config) => {
require('cypress-plugin-retries/lib/plugin')(on)
}
module.exports = (on, config) => {
  const options = {
    
    webpackOptions: require('../../webpack.config'),
    watchOptions: {}
  };



  on('file:preprocessor', webpack(options));
  on('file:preprocessor', cucumber());
};
