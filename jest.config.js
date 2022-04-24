module.exports = {
  testEnvironment: "jsdom",
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "ts", "vue", "png"],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/spec/javascript/mocks/FileMock.js",
    "^@js(.*)$": "<rootDir>/src/javascripts/$1",
    "^@css(.*)$": "<rootDir>/src/styles/$1",
    "^@spec(.*)$": "<rootDir>/spec/javascripts/$1",
  },

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/?(*.)+(spec).[tj]s"],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ["/node_modules/"],

  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.ts$": "ts-jest",
    ".*\\.(vue)$": "@vue/vue3-jest",
  },
};
