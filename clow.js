module.exports = [
  {
    type: "template",
    src: {
      cwd: "templates",
      pattern: "**/*",
    },
    dest: ".",
    args: {
      name: null,
      description: null,
      year: (new Date()).getFullYear(),
    },
  },
  {
    type: "npm-install",
    dependencies: [
    ],
    devDependencies: [
      "react",
      "react-dom",
      "babel-cli",
      "babel-eslint",
      "babel-plugin-transform-runtime",
      "babel-preset-es2015",
      "babel-preset-es2016",
      "babel-preset-es2017",
      "babel-preset-stage-2",
      "babel-preset-react",
      "babel-register",
      "eslint",
      "eslint-plugin-babel",
      "eslint-plugin-async-await",
      // eslint-config-airbnb was installed via shell commands
      // "eslint-config-airbnb",
      // "eslint-plugin-import",
      // "eslint-plugin-jsx-a11y",
      // "eslint-plugin-react",
      "mocha",
      "recursive-readdir",
      "enzyme",
      "jsdom",
      "jsdom-global",
      "react-addons-test-utils",
      "ignore-styles",
      "nightmare",
      "webpack",
      "webpack-dev-server",
      "css-loader",
      "copy-webpack-plugin",
      "babel-loader",
      "style-loader",
    ],
  },
  {
    type: "shell",
    commands: [
      "npm info eslint-config-airbnb peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --DE eslint-config-airbnb",
    ],
  },
  {
    type: "shell",
    commands: [
      "git init",
      "git add .",
      "git commit -m 'Initialized by clow-template-react-module'",
    ],
  },
];
