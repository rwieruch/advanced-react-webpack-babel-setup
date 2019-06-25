const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.common.js');

const getAddons = addonsArgs => {
  let addons = Array.isArray(addonsArgs) ?
    addonsArgs : [addonsArgs];

  return addons
    .filter(Boolean)
    .map(name => require(`./addons/webpack.${name}.js`));
};

module.exports = ({ env, addon }) => {
  const envConfig = require(`./webpack.${env}.js`);

  return webpackMerge(commonConfig, envConfig, ...getAddons(addon));
};