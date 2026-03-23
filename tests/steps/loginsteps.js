import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixture';

const { Given, When, Then } = createBdd(test);

Given('I navigate to application', async ({ loginPage }) => {
  await loginPage.navigateToUrl('https://ecommerce-playground.lambdatest.io/')
});

When('I click on My account', async ({ loginPage }) => {
  await loginPage.clickOnMyAccount()
});

When('I enter email address {string} and password {string}', async ({ loginPage }, email, password) => {
  await loginPage.enterValidCreds(email, password)
});

When('I click on login button', async ({ loginPage }) => {
  await loginPage.clickOnLogin()
});

Then('I should be logged in successfully and navigated to My Account page', async ({ loginPage }) => {
  console.log('Login successfully')
  await loginPage.visitMyAccountPage('https://ecommerce-playground.lambdatest.io/index.php?route=account/account')
})

When('I enter invalid email address {string} and invalid password {string}', async ({ loginPage }, invalidemail, invalidpass) => {
  await loginPage.enterInValidCreds(invalidemail, invalidpass)
})

Then('I should verify user is not able to login and verify the validation mesasge', async ({ loginPage }, msg) => {
  console.log('Login failed')
  await loginPage.verifyValidationMsg(msg)
})
