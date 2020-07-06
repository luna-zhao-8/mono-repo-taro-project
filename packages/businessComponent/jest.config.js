module.exports = {
    verbose: true,
    moduleFileExtensions: ['js', 'jsx', 'json'],
    rootDir: __dirname,
    testMatch: ['<rootDir>/tests/*.test.js'],
    transform: {
      '^.+\\.js?$': 'babel-jest'
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleNameMapper: {
      react: 'nervjs',
      'react-addons-test-utils': 'nerv-test-utils',
      'react-dom': 'nervjs',
      weui: '<rootDir>/tests/__mock__/styleMock.js',
      '\\.(css|less|sass|scss)$': '<rootDir>/tests/__mock__/styleMock.js',
      '\\.(png)$': '<rootDir>/tests/__mock__/styleMock.js'
    },
    testURL: 'http://localhost'
  }
  