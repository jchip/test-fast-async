module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        exclude: [
          "@babel/plugin-transform-regenerator",
          "@babel/plugin-transform-async-to-generator"
        ]
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    [
      "module:fast-async",
      {
        compiler: {
          promises: true,
          generators: false
        },
        runtimePattern: null,
        useRuntimeModule: true
      }
    ]
  ]
};
