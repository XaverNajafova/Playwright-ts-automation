# Playwright TypeScript Automation Framework

## 📌 Project Overview

This project is a UI automation framework built with Playwright and TypeScript using Page Object Model (POM) design pattern.

The framework supports:
- Cross-browser testing
- Reusable page objects
- JSON test data management
- Jenkins CI integration
- Positive and negative test scenarios

---

# 🧱 Framework Structure

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
├── playwright.config.ts
└── README.md
```

---

# ✅ Test Scenarios

### Positive Test
- Valid login with correct credentials

### Negative Tests
- Invalid username/password
- Empty login validation

---

# ⚙️ Technologies Used

- Playwright
- TypeScript
- Node.js
- Jenkins
- GitHub

---

# 🚀 Installation

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# ▶️ Run Tests

Run all tests:

```bash
npx playwright test
```

Run specific browser:

```bash
npx playwright test --project=chromium
```

Open HTML report:

```bash
npx playwright show-report
```

---

# 🌐 Cross Browser Testing

Framework supports:
- Chromium
- Firefox
- WebKit

---

# 📊 Reporting

HTML reporting is enabled using Playwright Reporter.

Reports are generated automatically after test execution.

---

# 🔧 CI/CD Integration

This project is integrated with Jenkins.

Jenkins pipeline performs:
- GitHub code pull
- Dependency installation
- Playwright test execution
- Automated CI execution

---

# 📁 Test Data Management

Test data is stored separately in JSON format for better maintainability and reusability.

Example:

```json
{
  "validUser": {
    "username": "standard_user",
    "password": "secret_sauce"
  }
}
```

---

# 🧠 Framework Design Pattern

This framework follows:
- Page Object Model (POM)
- Reusable BasePage methods
- Modular test architecture

---

# 👩‍💻 Author

Automation QA Portfolio Project

Built with Playwright + TypeScript