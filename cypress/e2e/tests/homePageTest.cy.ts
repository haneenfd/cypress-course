import { companyButtons,universityButtons } from "../selectors/homePageSelectors";
import { performLogin } from "./performLogin";
import { universityUsername,password,companyUsername } from "../selectors/loginCredentials";

describe('“Homepage“ page test cases for university role', () => {

  beforeEach(() => {
    performLogin(universityUsername,password);
  });

  universityButtons.forEach((button) => {
    it('valid button redirection', () => {
      cy.get(button).click();
    });
  })

});

describe('“Homepage“ page test cases for Company role', () => {

  beforeEach(() => {
    performLogin(companyUsername,password);
  });

  companyButtons.forEach((button) => {
    it('valid button redirection', () => {
      cy.get(button).click();
    });
  })

});