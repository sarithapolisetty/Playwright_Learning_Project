import { expect } from '@playwright/test';

class LoginPage {
    constructor(page) {
        this.page = page
        this.myAccountBtn = page.getByRole('button', { name: 'My account' })
        this.emailAddressInput = page.getByRole('textbox', { name: 'E-Mail Address' })
        this.passwordInput = page.getByRole('textbox', { name: 'Password' })
        this.loginBtn = page.getByRole('button', { name: 'Login' })
        this.validationMsg = page.locator('.alert-danger', { text: 'Warning: No match for E-Mail Address and/or Password.'})
    }

    async navigateToUrl(url) {
        await this.page.goto(url);
    }

    async clickOnMyAccount() {
        await this.myAccountBtn.click()
    }

    async enterValidCreds(emailAddress, password) {
        await this.emailAddressInput.fill(emailAddress)
        await this.passwordInput.fill(password)
    }

    async enterInValidCreds(invalidemailAddress, invalidpassword) {
        await this.emailAddressInput.fill(invalidemailAddress)
        await this.passwordInput.fill(invalidpassword)
    }

    async clickOnLogin() {
        await this.loginBtn.click()
    }

    async visitMyAccountPage(url) {
        await this.page.goto(url)
    }

    async verifyValidationMsg(message) {
        await expect(this.validationMsg).toBeVisible()
        await expect(this.validationMsg).toContainText(new RegExp(message))
    }

}

export { LoginPage };
