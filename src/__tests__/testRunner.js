/**
 * Test Runner for Portfolio Application
 * 
 * This script provides utilities for running and managing tests
 * for the resume download and contact form functionality.
 */

// Test Categories
export const TEST_CATEGORIES = {
  UNIT: 'unit',
  INTEGRATION: 'integration',
  E2E: 'e2e',
  ACCESSIBILITY: 'accessibility'
};

// Test Scenarios for Resume Download
export const RESUME_DOWNLOAD_SCENARIOS = [
  {
    name: 'Basic Download Functionality',
    description: 'Verify resume download button renders and has correct attributes',
    testFile: 'Hero.test.js',
    category: TEST_CATEGORIES.UNIT
  },
  {
    name: 'Download Link Validation',
    description: 'Ensure download link points to correct PDF file',
    testFile: 'Hero.test.js',
    category: TEST_CATEGORIES.UNIT
  },
  {
    name: 'Download Accessibility',
    description: 'Verify download button is accessible via keyboard and screen readers',
    testFile: 'Hero.test.js',
    category: TEST_CATEGORIES.ACCESSIBILITY
  },
  {
    name: 'Cross-browser Download Support',
    description: 'Test download functionality across different browsers',
    testFile: 'DownloadAndContact.integration.test.js',
    category: TEST_CATEGORIES.INTEGRATION
  }
];

// Test Scenarios for Contact Form
export const CONTACT_FORM_SCENARIOS = [
  {
    name: 'Form Rendering',
    description: 'Verify all form fields render correctly',
    testFile: 'Contact.test.js',
    category: TEST_CATEGORIES.UNIT
  },
  {
    name: 'Form Submission',
    description: 'Test form submission generates correct mailto link',
    testFile: 'Contact.test.js',
    category: TEST_CATEGORIES.UNIT
  },
  {
    name: 'Form Validation',
    description: 'Test form handles various input scenarios',
    testFile: 'Contact.test.js',
    category: TEST_CATEGORIES.UNIT
  },
  {
    name: 'Email Generation',
    description: 'Verify mailto link format and encoding',
    testFile: 'Contact.test.js',
    category: TEST_CATEGORIES.UNIT
  },
  {
    name: 'Form Accessibility',
    description: 'Ensure form is accessible and properly labeled',
    testFile: 'Contact.test.js',
    category: TEST_CATEGORIES.ACCESSIBILITY
  },
  {
    name: 'End-to-End Contact Flow',
    description: 'Test complete user journey from hero to contact submission',
    testFile: 'DownloadAndContact.integration.test.js',
    category: TEST_CATEGORIES.INTEGRATION
  }
];

// Performance Test Scenarios
export const PERFORMANCE_SCENARIOS = [
  {
    name: 'Component Load Time',
    description: 'Measure time to render download and contact components',
    testFile: 'DownloadAndContact.integration.test.js',
    category: TEST_CATEGORIES.INTEGRATION
  },
  {
    name: 'Rapid Interaction Handling',
    description: 'Test rapid clicks and form submissions',
    testFile: 'DownloadAndContact.integration.test.js',
    category: TEST_CATEGORIES.INTEGRATION
  }
];

// Error Handling Test Scenarios
export const ERROR_HANDLING_SCENARIOS = [
  {
    name: 'Missing Form Data',
    description: 'Test form submission with empty or missing fields',
    testFile: 'Contact.test.js',
    category: TEST_CATEGORIES.UNIT
  },
  {
    name: 'Browser API Failures',
    description: 'Test behavior when browser APIs are unavailable',
    testFile: 'Contact.test.js',
    category: TEST_CATEGORIES.UNIT
  },
  {
    name: 'Network Connectivity Issues',
    description: 'Test download behavior with network issues',
    testFile: 'DownloadAndContact.integration.test.js',
    category: TEST_CATEGORIES.INTEGRATION
  }
];

/**
 * Generate test report summary
 */
export const generateTestReport = (testResults) => {
  const report = {
    totalTests: 0,
    passedTests: 0,
    failedTests: 0,
    categories: {},
    scenarios: {
      download: RESUME_DOWNLOAD_SCENARIOS.length,
      contact: CONTACT_FORM_SCENARIOS.length,
      performance: PERFORMANCE_SCENARIOS.length,
      errorHandling: ERROR_HANDLING_SCENARIOS.length
    }
  };

  // Process test results if provided
  if (testResults) {
    report.totalTests = testResults.numTotalTests || 0;
    report.passedTests = testResults.numPassedTests || 0;
    report.failedTests = testResults.numFailedTests || 0;
  }

  return report;
};

/**
 * Test execution commands for different scenarios
 */
export const TEST_COMMANDS = {
  // Run all tests
  ALL: 'npm test -- --watchAll=false',
  
  // Run specific test files
  HERO_TESTS: 'npm test -- --testPathPattern=Hero.test.js --watchAll=false',
  CONTACT_TESTS: 'npm test -- --testPathPattern=Contact.test.js --watchAll=false',
  INTEGRATION_TESTS: 'npm test -- --testPathPattern=integration --watchAll=false',
  
  // Run tests by category
  UNIT_TESTS: 'npm test -- --testPathPattern="(Hero|Contact).test.js" --watchAll=false',
  
  // Run with coverage
  COVERAGE: 'npm test -- --coverage --watchAll=false',
  
  // Run in watch mode for development
  WATCH: 'npm test',
  
  // Run specific test suites
  DOWNLOAD_TESTS: 'npm test -- --testNamePattern="Resume Download|Download" --watchAll=false',
  CONTACT_FORM_TESTS: 'npm test -- --testNamePattern="Contact Form|Send Message" --watchAll=false'
};

/**
 * Manual testing checklist for QA
 */
export const MANUAL_TEST_CHECKLIST = {
  resumeDownload: [
    '✓ Click "Download Resume" button in hero section',
    '✓ Verify PDF file downloads to default download folder',
    '✓ Verify downloaded file is named "Laxman-Singh-Rawat-Resume.pdf"',
    '✓ Verify PDF opens correctly and contains resume content',
    '✓ Test download on different browsers (Chrome, Firefox, Safari, Edge)',
    '✓ Test download on different devices (Desktop, Mobile, Tablet)',
    '✓ Verify download works with popup blockers enabled',
    '✓ Test multiple rapid clicks on download button'
  ],
  
  contactForm: [
    '✓ Navigate to contact section via "Get In Touch" button',
    '✓ Fill out all form fields with valid data',
    '✓ Click "Send Message" button',
    '✓ Verify default email client opens with pre-filled content',
    '✓ Verify email recipient is laxman.sr.iitkgp@gmail.com',
    '✓ Verify subject line matches form input',
    '✓ Verify message body contains name, email, and message',
    '✓ Test form with special characters and emojis',
    '✓ Test form with empty fields',
    '✓ Test form submission multiple times',
    '✓ Verify form works on mobile devices',
    '✓ Test keyboard navigation through form fields'
  ],
  
  accessibility: [
    '✓ Test with screen reader (NVDA, JAWS, VoiceOver)',
    '✓ Navigate using only keyboard (Tab, Enter, Space)',
    '✓ Verify proper focus indicators on all interactive elements',
    '✓ Check color contrast ratios meet WCAG standards',
    '✓ Verify alt text for profile image',
    '✓ Test with browser zoom at 200%',
    '✓ Verify proper heading hierarchy'
  ],
  
  crossBrowser: [
    '✓ Test on Chrome (latest)',
    '✓ Test on Firefox (latest)',
    '✓ Test on Safari (latest)',
    '✓ Test on Edge (latest)',
    '✓ Test on mobile browsers (iOS Safari, Chrome Mobile)',
    '✓ Test with JavaScript disabled',
    '✓ Test with cookies disabled'
  ]
};

export default {
  TEST_CATEGORIES,
  RESUME_DOWNLOAD_SCENARIOS,
  CONTACT_FORM_SCENARIOS,
  PERFORMANCE_SCENARIOS,
  ERROR_HANDLING_SCENARIOS,
  TEST_COMMANDS,
  MANUAL_TEST_CHECKLIST,
  generateTestReport
};
