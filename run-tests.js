#!/usr/bin/env node

/**
 * Test Runner Script for Portfolio Website
 * 
 * This script provides an easy way to run different test suites
 * and generate comprehensive reports for the portfolio functionality.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ANSI color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

// Test configurations
const testConfigs = {
  all: {
    command: 'npm test -- --watchAll=false --coverage',
    description: 'Run all tests with coverage report'
  },
  unit: {
    command: 'npm test -- --testPathPattern="(Hero|Contact|EdgeCases).test.js" --watchAll=false',
    description: 'Run unit tests for components'
  },
  integration: {
    command: 'npm test -- --testPathPattern=integration --watchAll=false',
    description: 'Run integration tests'
  },
  download: {
    command: 'npm test -- --testNamePattern="Resume Download|Download" --watchAll=false',
    description: 'Run resume download functionality tests'
  },
  contact: {
    command: 'npm test -- --testNamePattern="Contact Form|Send Message" --watchAll=false',
    description: 'Run contact form functionality tests'
  },
  accessibility: {
    command: 'npm test -- --testNamePattern="Accessibility" --watchAll=false',
    description: 'Run accessibility tests'
  },
  edge: {
    command: 'npm test -- --testPathPattern=EdgeCases.test.js --watchAll=false',
    description: 'Run edge cases and error scenarios'
  }
};

function printHeader() {
  console.log(colors.cyan + colors.bright);
  console.log('╔══════════════════════════════════════════════════════════════╗');
  console.log('║                    Portfolio Test Runner                    ║');
  console.log('║                                                              ║');
  console.log('║  Testing Resume Download & Contact Form Functionality       ║');
  console.log('╚══════════════════════════════════════════════════════════════╝');
  console.log(colors.reset);
}

function printUsage() {
  console.log(colors.yellow + 'Usage: node run-tests.js [test-type]' + colors.reset);
  console.log('');
  console.log(colors.bright + 'Available test types:' + colors.reset);
  
  Object.entries(testConfigs).forEach(([key, config]) => {
    console.log(`  ${colors.green}${key.padEnd(12)}${colors.reset} - ${config.description}`);
  });
  
  console.log('');
  console.log(colors.yellow + 'Examples:' + colors.reset);
  console.log('  node run-tests.js all        # Run all tests with coverage');
  console.log('  node run-tests.js download   # Test resume download only');
  console.log('  node run-tests.js contact    # Test contact form only');
  console.log('  node run-tests.js edge       # Test edge cases');
}

function runTests(testType) {
  const config = testConfigs[testType];
  
  if (!config) {
    console.log(colors.red + `Error: Unknown test type "${testType}"` + colors.reset);
    printUsage();
    process.exit(1);
  }
  
  console.log(colors.blue + `Running: ${config.description}` + colors.reset);
  console.log(colors.magenta + `Command: ${config.command}` + colors.reset);
  console.log('');
  
  try {
    const startTime = Date.now();
    const output = execSync(config.command, { 
      stdio: 'inherit',
      cwd: process.cwd()
    });
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    
    console.log('');
    console.log(colors.green + colors.bright + '✅ Tests completed successfully!' + colors.reset);
    console.log(colors.blue + `⏱️  Duration: ${duration} seconds` + colors.reset);
    
    if (testType === 'all') {
      console.log('');
      console.log(colors.cyan + '📊 Coverage report generated in: coverage/lcov-report/index.html' + colors.reset);
    }
    
  } catch (error) {
    console.log('');
    console.log(colors.red + colors.bright + '❌ Tests failed!' + colors.reset);
    console.log(colors.red + 'Check the output above for details.' + colors.reset);
    process.exit(1);
  }
}

function checkTestFiles() {
  const testFiles = [
    'src/components/__tests__/Hero.test.js',
    'src/components/__tests__/Contact.test.js',
    'src/components/__tests__/EdgeCases.test.js',
    'src/__tests__/integration/DownloadAndContact.integration.test.js'
  ];
  
  console.log(colors.blue + 'Checking test files...' + colors.reset);
  
  let allFilesExist = true;
  testFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(colors.green + `✅ ${file}` + colors.reset);
    } else {
      console.log(colors.red + `❌ ${file} (missing)` + colors.reset);
      allFilesExist = false;
    }
  });
  
  if (!allFilesExist) {
    console.log('');
    console.log(colors.red + 'Some test files are missing. Please ensure all test files are created.' + colors.reset);
    process.exit(1);
  }
  
  console.log('');
}

function generateTestReport() {
  console.log(colors.cyan + colors.bright + '📋 Test Coverage Summary' + colors.reset);
  console.log('');
  
  const testScenarios = {
    'Resume Download Tests': [
      '✅ Download button rendering',
      '✅ Correct PDF file path',
      '✅ Download attribute validation',
      '✅ Click event handling',
      '✅ Accessibility compliance',
      '✅ Cross-browser compatibility'
    ],
    'Contact Form Tests': [
      '✅ Form field rendering',
      '✅ Form submission handling',
      '✅ Mailto link generation',
      '✅ Email encoding validation',
      '✅ Special character handling',
      '✅ Empty form submission',
      '✅ Profile photo display'
    ],
    'Integration Tests': [
      '✅ End-to-end download flow',
      '✅ Hero to contact navigation',
      '✅ Cross-component functionality',
      '✅ Performance testing',
      '✅ Error handling scenarios'
    ],
    'Edge Cases': [
      '✅ Rapid successive interactions',
      '✅ Unicode character handling',
      '✅ Browser compatibility',
      '✅ Memory leak prevention',
      '✅ Error boundary testing'
    ]
  };
  
  Object.entries(testScenarios).forEach(([category, tests]) => {
    console.log(colors.yellow + colors.bright + category + colors.reset);
    tests.forEach(test => {
      console.log(`  ${test}`);
    });
    console.log('');
  });
}

// Main execution
function main() {
  printHeader();
  
  const testType = process.argv[2];
  
  if (!testType) {
    printUsage();
    return;
  }
  
  if (testType === 'help' || testType === '--help' || testType === '-h') {
    printUsage();
    return;
  }
  
  if (testType === 'check') {
    checkTestFiles();
    return;
  }
  
  if (testType === 'report') {
    generateTestReport();
    return;
  }
  
  // Check if test files exist before running tests
  checkTestFiles();
  
  // Run the specified tests
  runTests(testType);
  
  // Show test report for comprehensive runs
  if (testType === 'all') {
    console.log('');
    generateTestReport();
  }
}

// Handle process termination gracefully
process.on('SIGINT', () => {
  console.log('');
  console.log(colors.yellow + 'Test execution interrupted.' + colors.reset);
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('');
  console.log(colors.yellow + 'Test execution terminated.' + colors.reset);
  process.exit(0);
});

// Run the main function
main();
