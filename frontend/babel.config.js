module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
    ],
    env: {
      production: {
        plugins: [
          'react-native-paper/babel', //exclude modules that don't use in react-native-paper to reduce the bundle size
        ],
      },
    },
  };
};
