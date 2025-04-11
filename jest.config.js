// jest.config.js
module.exports = {
  moduleNameMapper: {
    "^./mision.entity$": "<rootDir>/src/data/mision.entity.js"
  },
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  testEnvironment: "node",
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"]
};
