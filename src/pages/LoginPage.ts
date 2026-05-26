import { BasePage } from '../base/BasePage';

export class LoginPage extends BasePage {
  username = '#user-name';
  password = '#password';
  loginBtn = '#login-button';

  async login(user: string, pass: string) {
    await this.fill(this.username, user);
    await this.fill(this.password, pass);
    await this.click(this.loginBtn);
  }
}