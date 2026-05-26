# Playwright TypeScript Automation Framework

## 📌 Project Overview

This project is a UI automation framework built with Playwright and TypeScript using Page Object Model (POM) design pattern.
This project demonstrates real-world CI/CD integrated automation framework used for regression execution

## 🧠 Framework Architecture

- BasePage contains reusable common actions
- Page classes encapsulate UI elements and actions
- Test layer focuses only on test logic
- Utilities handle test data and helpers

## 🎯 Why this architecture?

This structure was chosen to:
- Reduce code duplication
- Improve test maintainability
- Support scalable test growth
- Enable easy CI/CD integration

![Playwright](https://img.shields.io/badge/Playwright-TypeScript-green)
![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-red)
![Status](https://img.shields.io/badge/Tests-Passing-brightgreen)

The framework supports:
- Cross-browser testing
- Reusable page objects
- JSON test data management
- Jenkins CI integration
- Positive and negative test scenarios

## 🧱 Framework Structure

```text
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
├── screenshots/
│   ├── allure-report.png
│   └── jenkins-success.png
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

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

```bash
npx playwright test
```

## 🌐 Cross Browser Testing

Supports:
- Chromium
- Firefox
- WebKit

## 📊 Reporting

Playwright HTML Report:
npx playwright show-report  

Allure Report:
```bash
allure generate ./allure-results --clean
allure open
``` 

### Allure Report Overview

<img src="screenshots/allure-report.png" width="900"/>

## 🔧 CI/CD Integration

This project is integrated with Jenkins.

Pipeline steps:
- GitHub code pull (webhook trigger)
- npm install
- Playwright test execution
- Automated CI runs on every push

### Jenkins Pipeline

<img src="screenshots/jenkins-success.png" width="900"/>

## 📁 Test Data Management

Test data is stored in JSON format for reusability.

### Example:
```json
{
  "validUser": {
    "username": "standard_user",
    "password": "secret_sauce"
  }
}


## 👩‍💻 Author

QA Engineer (Manual & Automation) Portfolio Project

Built with Playwright + TypeScript