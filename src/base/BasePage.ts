import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async open(url: string) {
    await this.page.goto(url);
  }

  async fill(locator: string, value: string) {
    await this.page.locator(locator).fill(value);
  }

  async click(locator: string) {
    await this.page.locator(locator).click();
  }
}