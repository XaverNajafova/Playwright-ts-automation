# Playwright TypeScript Automation Framework

## 📌 Project Overview

This project is a UI automation framework built with Playwright and TypeScript using Page Object Model (POM) design pattern.

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
npm install
npx playwright install
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