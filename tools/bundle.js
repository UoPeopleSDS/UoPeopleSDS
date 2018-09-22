const webpack = require('webpack');
const reactWebpackConfig = require('../webpack.config');
const serverWebpackConfig = require('../server.webpack.config');

function bundle() {
  // Bundle the React JSX Components
  const reactWebpackPromise = new Promise((resolve, reject) => {
    console.log("----- BUNDLING REACT JSX COMPONENTS -----");
    webpack(reactWebpackConfig).run((err, stats) => {
      if (err) {
        console.error(err);
        return reject(err);
      }
      console.log("----- FINISHED BUNDLING REACT JSX COMPONENTS -----");
      console.log(stats);
      return resolve();
    });
  });
  
  // Bundle server.js
  const serverWebpackPromise = new Promise((resolve, reject) => {
    console.log("----- BUNDLING SERVER.JS -----");
    webpack(serverWebpackConfig).run((err, stats) => {
      if (err) {
        console.error(err);
        return reject(err);
      }
      console.log("----- FINISHED BUNDLING SERVER.JS -----");
      console.log(stats);
      return resolve();
    });
  });

  return Promise.all([reactWebpackConfig, serverWebpackConfig]);
}

export default bundle;