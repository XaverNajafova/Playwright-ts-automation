# Playwright TypeScript Automation Framework

## 📌 Project Overview

This project is a UI automation framework built with Playwright and TypeScript using Page Object Model (POM) design pattern.

The framework supports:
- Cross-browser testing
- Reusable page objects
- JSON test data management
- Jenkins CI integration
- Positive and negative test scenarios

## 🧱 Framework Structure

playwright-ts-framework/
│
├── src/
│   ├── base/
│   │   └── BasePage.ts
│   │
│   ├── pages/
│   │   └── LoginPage.ts
│   │
│   ├── tests/
│   │   ├── login.spec.ts
│   │   ├── login-negative.spec.ts
│   │   └── login-empty.spec.ts
│   │
│   └── utils/
│       └── testData.json
│
├── playwright.config.ts
└── README.md

## ⚙️ Technologies Used

- Playwright
- TypeScript
- Node.js
- Jenkins
- GitHub

## 🚀 Installation

npm install  
npx playwright install  

## ▶️ Run Tests

npx playwright test  

npx playwright test --project=chromium  

## 🌐 Cross Browser Testing

Supports:
- Chromium
- Firefox
- WebKit

## 📊 Reporting

Playwright HTML Report:
npx playwright show-report  

Allure Report:
npx playwright test  
npx allure generate allure-results -o allure-report  
npx allure open allure-report  

## 🔧 CI/CD Integration

This project is integrated with Jenkins.

Pipeline steps:
- GitHub code pull (webhook trigger)
- npm install
- Playwright test execution
- Automated CI runs on every push

## 📁 Test Data Management

Test data is stored in JSON format for reusability.

Example:
{
  "validUser": {
    "username": "standard_user",
    "password": "secret_sauce"
  }
}

## 🧠 Framework Design Pattern

- Page Object Model (POM)
- BasePage reusable methods
- Modular test architecture

## 👩‍💻 Author

QA Engineer (Manual & Automation) Portfolio Project

Built with Playwright + TypeScript