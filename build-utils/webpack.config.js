/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

const getAddons = addonsArgs => {
  const addons = Array.isArray(addonsArgs)
    ? addonsArgs
    : [addonsArgs];

  return addons
    .filter(Boolean)
    .map(name => require(`./addons/webpack.${name}.js`));
};

module.exports = ({ env, addon }) => {
  const envConfig = require(`./webpack.${env}.js`);

  return webpackMerge(commonConfig, envConfig, ...getAddons(addon));
};
