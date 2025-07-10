# Playwright Test Suite for SAP Fioneer Website

This repository contains a Playwright test suite written in TypeScript to automate testing of the SAP Fioneer website.

## Installation

Follow these steps to set up the project:


**Install Dependencies**:
   Install Node.js dependencies, including Playwright.
   ```bash
   npm install
   ```

**Install Playwright Browsers**:
   Install the browsers required by Playwright.
   ```bash
   npx playwright install
   ```

## Running the Tests

The test suite is located in `tests/dropdown.spec.ts`. Use the following commands to run the tests:

1. **Run All Tests**:
   Execute the entire test suite.
   ```bash
   npx playwright test
   ```

2. **Run a Specific Test**:
   Run only the test marked with `test.only` (e.g., "Test 2 — verify ESG KPI page").
   ```bash
   npx playwright test --grep "Test 2"
   ```

3. **Run Tests in Headed Mode**:
   Run tests with a visible browser for debugging.
   ```bash
   npx playwright test --headed
   ```

4. **Generate Test Report**:
   View the HTML report after running tests.
   ```bash
   npx playwright show-report
   ```
