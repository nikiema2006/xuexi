module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Le plugin Reanimated doit être le dernier de la liste
      "react-native-reanimated/plugin",
    ],
  };
};
