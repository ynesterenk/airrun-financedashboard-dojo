// jest.config.js
module.exports = {
  // Folders to ignore during Haste map creation and test runs
  modulePathIgnorePatterns: [
    "public/src/dojo/", // Ignore the entire local dojo source
    "public/src/dijit/", // Ignore local dijit source
    "public/src/dojox/", // Ignore local dojox source
  ],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)", // Keep default pattern
    "**/?(*.)+(spec|test).[tj]s?(x)", // Keep default pattern
    // ---> Add pattern for .mjs files <---
    "**/?(*.)+(spec|test).mjs"
  ],
};