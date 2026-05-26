import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('empty login test', async ({ page }) => {
  const login = new LoginPage(page);

  await login.open('/');
  await login.login('', '');

  const errorMessage = page.locator('[data-test="error"]');

  await expect(errorMessage).toBeVisible();
});