import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import data from '../utils/testData.json';

test('invalid login test @regression', async ({ page }) => {
  const login = new LoginPage(page);

  await login.open('/');
  await login.login(
    data.invalidUser.username,
    data.invalidUser.password
  );

  const errorMessage = page.locator('[data-test="error"]');

  await expect(errorMessage).toBeVisible();
});