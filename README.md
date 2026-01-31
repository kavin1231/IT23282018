# Swift Translator Automated Test Suite

## Overview

Complete automated testing solution for Swift Translator (Singlish to Sinhala conversion) using Playwright. Contains 44 test cases covering functional, negative, and UI testing.

## Test Coverage

- **30 Positive Tests**: Valid Singlish to Sinhala conversions
- **10 Negative Tests**: Invalid/edge case inputs
- **4 UI Tests**: Interface functionality testing
- **Total**: 44 test cases

## Prerequisites

- Node.js 16 or higher
- npm or yarn

## Installation

```bash
npm install
npx playwright install

# Run positive tests with reports
npx playwright test all-positive-tests-complete.spec.js --reporter=html

# Run negative tests
npx playwright test all-negative-tests-complete.spec.js --reporter=html

# View reports
npx playwright show-report

# Generate Excel report
node generate-excel-report-complete.js
```
