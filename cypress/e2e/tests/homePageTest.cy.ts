import { companyButtons } from "../selectors/homePageSelectors";
import { LoginPage } from "./loginpageHelper";
const loginPage = new LoginPage();

describe('“Homepage“ page test cases for company role', () => {

  beforeEach(() => {
    cy.login('ptuk.en','123');
    cy.visit('/me');
  });
  companyButtons.forEach((button) => {
    it('valid button redirection', () => {
      cy.get(button).click();
      cy.url().should("include", button);
    });
  })

});