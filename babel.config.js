
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            'react-native-vector-icons': '@expo/vector-icons',
            '@expo/vector-icons': '@expo/vector-icons',
            'native-base': 'native-base-shoutem-theme',
          },
        },
      ],
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true,
        },
      ],
    ],
  };
};
