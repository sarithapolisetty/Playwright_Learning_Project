Feature: Login Functionality

  Scenario Outline: Verify user is able to login with valid credentials
    Given I navigate to application
    And I click on My account
    And I enter email address "<emailaddress>" and password "<password>"
    When I click on login button
    Then I should be logged in successfully and navigated to My Account page

    Examples:
      | emailaddress                   | password |
      | pranav@testroverautomation.com | Test1234 |

  Scenario Outline: Verify user is not able to login with invalid credentials
    Given I navigate to application
    And I click on My account
    And I enter invalid email address "<invalidemailaddress>" and invalid password "<invalidpassword>"
    When I click on login button
    Then I should verify user is not able to login and verify the validation mesasge

    Examples:
      | invalidemailaddress | invalidpassword |
      | pranav@testrover    | Test12345       |
