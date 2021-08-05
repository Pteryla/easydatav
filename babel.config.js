module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true },
    ],
    [
      "component",
      {
        libraryName: "element-plus",
        styleLibraryName: "theme-chalk",
      },
    ],
  ],
};
