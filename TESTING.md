# Testing Guide for Portfolio Website

This document provides comprehensive testing instructions for the resume download and contact form functionality.

## 🧪 Test Suite Overview

### Test Files Created
- `src/components/__tests__/Hero.test.js` - Tests for resume download functionality
- `src/components/__tests__/Contact.test.js` - Tests for contact form functionality  
- `src/__tests__/integration/DownloadAndContact.integration.test.js` - End-to-end integration tests
- `src/__tests__/testRunner.js` - Test utilities and scenarios
- `src/setupTests.js` - Test environment configuration

## 🚀 Quick Start

### Install Testing Dependencies
```bash
npm install
```

### Run All Tests
```bash
npm test -- --watchAll=false
```

### Run Tests with Coverage
```bash
npm test -- --coverage --watchAll=false
```

## 📋 Test Categories

### 1. Resume Download Tests
**File**: `Hero.test.js`

**Test Scenarios**:
- ✅ Download button renders correctly
- ✅ Correct PDF file path (`/Laxman-Singh-Rawat-Resume.pdf`)
- ✅ Download attribute is properly set
- ✅ Button styling and accessibility
- ✅ Click event handling
- ✅ Icon display

**Run Command**:
```bash
npm test -- --testPathPattern=Hero.test.js --watchAll=false
```

### 2. Contact Form Tests
**File**: `Contact.test.js`

**Test Scenarios**:
- ✅ Form renders with all fields
- ✅ Form submission generates mailto link
- ✅ Email encoding and formatting
- ✅ Special character handling
- ✅ Empty form submission
- ✅ Profile photo display
- ✅ Contact information links
- ✅ Accessibility compliance

**Run Command**:
```bash
npm test -- --testPathPattern=Contact.test.js --watchAll=false
```

### 3. Integration Tests
**File**: `DownloadAndContact.integration.test.js`

**Test Scenarios**:
- ✅ End-to-end download flow
- ✅ Hero to contact navigation
- ✅ Cross-component functionality
- ✅ Performance testing
- ✅ Error handling
- ✅ Rapid interaction testing

**Run Command**:
```bash
npm test -- --testPathPattern=integration --watchAll=false
```

## 🎯 Specific Test Commands

### Resume Download Tests Only
```bash
npm test -- --testNamePattern="Resume Download|Download" --watchAll=false
```

### Contact Form Tests Only
```bash
npm test -- --testNamePattern="Contact Form|Send Message" --watchAll=false
```

### Unit Tests Only
```bash
npm test -- --testPathPattern="(Hero|Contact).test.js" --watchAll=false
```

### Watch Mode (for development)
```bash
npm test
```

## 🔍 Manual Testing Checklist

### Resume Download Functionality

#### Basic Functionality
- [ ] Click "Download Resume" button in hero section
- [ ] Verify PDF file downloads to default download folder
- [ ] Verify downloaded file is named "Laxman-Singh-Rawat-Resume.pdf"
- [ ] Verify PDF opens correctly and contains resume content

#### Cross-Browser Testing
- [ ] Test download on Chrome (latest)
- [ ] Test download on Firefox (latest)
- [ ] Test download on Safari (latest)
- [ ] Test download on Edge (latest)

#### Edge Cases
- [ ] Test multiple rapid clicks on download button
- [ ] Test download with popup blockers enabled
- [ ] Test download on mobile devices

### Contact Form Functionality

#### Basic Form Testing
- [ ] Navigate to contact section via "Get In Touch" button
- [ ] Fill out all form fields with valid data:
  - Name: "Test User"
  - Email: "test@example.com"
  - Subject: "Test Subject"
  - Message: "Test message content"
- [ ] Click "Send Message" button
- [ ] Verify default email client opens

#### Email Validation
- [ ] Verify email recipient is `laxman.sr.iitkgp@gmail.com`
- [ ] Verify subject line matches form input
- [ ] Verify message body contains:
  - Name: Test User
  - Email: test@example.com
  - Message: Test message content

#### Edge Cases
- [ ] Test form with special characters: `@#$%^&*()`
- [ ] Test form with emojis: `🚀 💻 📧`
- [ ] Test form with empty fields
- [ ] Test form submission multiple times
- [ ] Test very long input values

#### Mobile Testing
- [ ] Test form on mobile devices
- [ ] Verify form fields are properly sized
- [ ] Test touch interactions

### Accessibility Testing

#### Keyboard Navigation
- [ ] Navigate using only Tab key
- [ ] Verify proper focus indicators
- [ ] Test Enter/Space key activation
- [ ] Verify logical tab order

#### Screen Reader Testing
- [ ] Test with NVDA (Windows)
- [ ] Test with JAWS (Windows)
- [ ] Test with VoiceOver (macOS)
- [ ] Verify proper announcements

#### Visual Accessibility
- [ ] Test with browser zoom at 200%
- [ ] Verify color contrast ratios
- [ ] Test with high contrast mode
- [ ] Verify alt text for profile image

## 🐛 Debugging Test Failures

### Common Issues and Solutions

#### Download Tests Failing
```bash
# Check if PDF file exists in public folder
ls public/Laxman-Singh-Rawat-Resume.pdf

# Verify file path in Hero component
grep -n "Laxman-Singh-Rawat-Resume.pdf" src/components/Hero.js
```

#### Contact Form Tests Failing
```bash
# Check if email address is correct
grep -n "laxman.sr.iitkgp@gmail.com" src/components/Contact.js

# Verify form submission handler
grep -n "handleSubmit" src/components/Contact.js
```

#### Integration Tests Failing
```bash
# Run tests in verbose mode
npm test -- --verbose --testPathPattern=integration
```

### Test Environment Issues

#### IntersectionObserver Errors
If you see IntersectionObserver errors, ensure `setupTests.js` is properly configured:
```javascript
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  disconnect() {}
  unobserve() {}
};
```

#### Window.location Errors
For mailto link testing, ensure window.location is properly mocked:
```javascript
delete window.location;
window.location = { href: '' };
```

## 📊 Test Coverage

### Expected Coverage Targets
- **Hero Component**: 95%+ coverage
- **Contact Component**: 95%+ coverage
- **Integration Tests**: 80%+ coverage

### Generate Coverage Report
```bash
npm test -- --coverage --watchAll=false
```

Coverage report will be generated in `coverage/lcov-report/index.html`

## 🚨 Continuous Integration

### GitHub Actions Setup
Add to `.github/workflows/test.yml`:
```yaml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm test -- --coverage --watchAll=false
```

## 🔧 Troubleshooting

### Common Test Failures

#### "Cannot find module" Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### "Test suite failed to run" Errors
```bash
# Check for syntax errors in test files
npm run build
```

#### Timeout Errors
```bash
# Increase test timeout
npm test -- --testTimeout=10000
```

### Performance Issues
```bash
# Run tests with limited workers
npm test -- --maxWorkers=2
```

## 📝 Writing New Tests

### Test File Structure
```javascript
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ComponentName from '../ComponentName';

describe('ComponentName', () => {
  beforeEach(() => {
    render(<ComponentName />);
  });

  test('should render correctly', () => {
    expect(screen.getByText(/expected text/i)).toBeInTheDocument();
  });
});
```

### Best Practices
- Use descriptive test names
- Test user interactions, not implementation details
- Mock external dependencies
- Use `screen.getByRole()` for better accessibility testing
- Group related tests with `describe()` blocks

## 📞 Support

If you encounter issues with the test suite:
1. Check this documentation first
2. Review test file comments
3. Run tests in verbose mode for more details
4. Check browser console for additional error information

---

**Last Updated**: October 2025  
**Test Framework**: Jest + React Testing Library  
**Coverage Target**: 90%+
