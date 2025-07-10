Playwright Test Suite for SAP Fioneer Website
This repository contains a Playwright test suite written in TypeScript to automate testing of the SAP Fioneer website, specifically focusing on dropdown navigation, solutions section verification, and contact form validation. The tests leverage the Playwright framework and a page object model (POM) for maintainability.


Installation

Install Dependencies:Install Node.js dependencies, including Playwright.

npm install


Install Playwright Browsers:Install the browsers required by Playwright.
npx playwright install


Running the Tests

Run All Tests:Execute the entire test suite.
npx playwright test


Run a Specific Test:Run only the test marked with test.only (e.g., "Test 2 — verify ESG KPI page").
npx playwright test --grep "Test 2"


Run Tests in Headed Mode:Run tests with a visible browser for debugging.
npx playwright test --headed


Generate Test Report:View the HTML report after running tests.
npx playwright show-report



