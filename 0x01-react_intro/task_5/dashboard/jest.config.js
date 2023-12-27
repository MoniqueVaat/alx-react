// "jest": {
//     "transform": {
//       "^.+\\.js$": "babel-jest"
//     }
//   }
// jest.config.js
module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
