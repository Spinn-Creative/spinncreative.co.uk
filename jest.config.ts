import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node', // Change to 'jsdom' for frontend tests or adjust per file later
  moduleFileExtensions: ['js', 'jsx','ts', 'tsx',  'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Maps @ to the src directory
  },
};

export default config;
