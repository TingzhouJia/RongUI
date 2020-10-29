module.exports = {
    roots: ['<rootDir>/components'],
    verbose:true,
    preset: "ts-jest",
    testMatch: ['**/__tests__/**/*.+(ts|tsx)', '**/?(*.)+(spec|test).+(ts|tsx)'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    coverageDirectory: './coverage',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePathIgnorePatterns: ["/node_modules/"],
  
    testPathIgnorePatterns: ['<rootDir>/jest.config.js'],
    "setupFilesAfterEnv": [
			"<rootDir>/setupTests.ts"
		]
  }