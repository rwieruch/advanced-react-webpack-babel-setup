/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common.ts');

const getAddons = addonsArgs => {
  const addons = Array.isArray(addonsArgs)
    ? addonsArgs
    : [addonsArgs];

  return addons
    .filter(Boolean)
    .map(name => require(`./addons/webpack.${name}.ts`));
};

module.exports = ({ env, addon }) => {
  const envConfig = require(`./webpack.${env}.ts`);

  return webpackMerge(commonConfig, envConfig, ...getAddons(addon));
};
