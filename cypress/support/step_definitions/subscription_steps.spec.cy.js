
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import selectPlan from '../../e2e/Task/selectPlan.cy';
import fillBasicInfo from '../../e2e/Task/fillBasicInfo.cy';
import fillCompanyInfo from '../../e2e/Task/fillCompanyInfo.cy';
import confirmSubscription from '../../e2e/Task/confirmSubscription.cy';

Given('I am on the theerty Day Free Trial plan page', () => {
  cy.visit('https://app.enginebi.net/subscription/0-plans')
})

When('I click on "START NOW" to fill the forms', () => {
  selectPlan();
})

And('I enter basic information and proceed to the next form', () => {
  fillBasicInfo();
})

And('I fill the company information and proceed to the next form', () => {
  fillCompanyInfo();
})

Then('I should see the confirmation for a successful subscription', () => {
  confirmSubscription();
})