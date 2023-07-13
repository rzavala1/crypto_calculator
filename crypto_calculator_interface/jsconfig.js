module.exports = {
    "compilerOptions": {
      "target": "ES6",
      "module": "es2020",
      "checkJs": true
    },
    "include": ["src/**/*.js"],
    "exclude": ["node_modules"],
    "paths": {
      "@atoms/*": ["src/components/@atoms/*"],
      "@molecules/*": ["src/components/@molecules/*"],
      "@organisms/*": ["src/components/@organisms/*"],
      "@pages/*": ["src/components/@pages/*"],
      "@templates/*": ["src/components/@templates/*"],
      "@images/*": ["src/assets/images/*"],
      "@services/*": ["src/services/*"]
    }
  }