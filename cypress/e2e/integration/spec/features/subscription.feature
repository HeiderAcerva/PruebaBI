Feature: Subscription for a Free Plan

  Scenario: User completes a subscription for the free 30-day trial
    Given I am on the Day Free Trial plan page
    When I click on START NOW to fill the forms
    And I enter basic information and proceed to the next form
    And I fill the company information and proceed to the next form
    Then I should see the confirmation for a successful subscription