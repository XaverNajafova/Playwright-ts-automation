import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import data from '../utils/testData.json';

test('valid login test @smoke', async ({ page }) => {
  const login = new LoginPage(page);

  await login.open('/');
  await login.login(data.validUser.username, data.validUser.password);

  await expect(page).toHaveURL(/inventory/);
});