// Generated from: tests/Features/login.feature
import { test } from "../../../tests/Fixtures/fixture.js";

test.describe('Login Functionality', () => {

  test.describe('Verify user is able to login with valid credentials', () => {

    test('Example #1', async ({ Given, When, Then, And, loginPage }) => { 
      await Given('I navigate to application', null, { loginPage }); 
      await And('I click on My account', null, { loginPage }); 
      await And('I enter email address "pranav@testroverautomation.com" and password "Test1234"', null, { loginPage }); 
      await When('I click on login button', null, { loginPage }); 
      await Then('I should be logged in successfully and navigated to My Account page', null, { loginPage }); 
    });

  });

  test.describe('Verify user is not able to login with invalid credentials', () => {

    test('Example #1', async ({ Given, When, Then, And, loginPage }) => { 
      await Given('I navigate to application', null, { loginPage }); 
      await And('I click on My account', null, { loginPage }); 
      await And('I enter invalid email address "pranav@testrover" and invalid password "Test12345"', null, { loginPage }); 
      await When('I click on login button', null, { loginPage }); 
      await Then('I should verify user is not able to login and verify the validation mesasge', null, { loginPage }); 
    });

  });

});

// == technical section ==

test.beforeAll('BeforeAll Hooks', ({ $runBeforeAllHooks, browser }) => $runBeforeAllHooks(test, { browser }, bddFileData));
test.afterAll('AfterAll Hooks', ({ $registerAfterAllHooks }) => $registerAfterAllHooks(test, {  }, bddFileData));
test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));
test.afterEach('AfterEach Hooks', ({ $runScenarioHooks }) => $runScenarioHooks('after', {  }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/Features/login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to application","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And I click on My account","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"And I enter email address \"pranav@testroverautomation.com\" and password \"Test1234\"","stepMatchArguments":[{"group":{"start":22,"value":"\"pranav@testroverautomation.com\"","children":[{"start":23,"value":"pranav@testroverautomation.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":68,"value":"\"Test1234\"","children":[{"start":69,"value":"Test1234","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I click on login button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should be logged in successfully and navigated to My Account page","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":21,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given I navigate to application","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And I click on My account","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"And I enter invalid email address \"pranav@testrover\" and invalid password \"Test12345\"","stepMatchArguments":[{"group":{"start":30,"value":"\"pranav@testrover\"","children":[{"start":31,"value":"pranav@testrover","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":70,"value":"\"Test12345\"","children":[{"start":71,"value":"Test12345","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When I click on login button","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then I should verify user is not able to login and verify the validation mesasge","stepMatchArguments":[]}]},
]; // bdd-data-end