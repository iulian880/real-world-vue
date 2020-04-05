module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", 
  "eslint:recommended", 
  "plugin:prettier/recommanded",
  "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  },
parserOptions: {
  parser: "babel-eslint"
}
};
