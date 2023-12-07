import { companyButtons,studentButtons,trainerButtons,universityButtons } from "../selectors/homePageSelectors";
import { performLogin } from "./performLogin";
import { universityUsername,password,companyUsername,trainerUsername, studentUsername } from "../selectors/loginCredentials";

describe('“Homepage“ page test cases for university role', () => {

  beforeEach(() => {
    performLogin(universityUsername,password);
  });

  universityButtons.forEach((button) => {
    it('valid button redirection', () => {
      cy.get(button).click();
      cy.wait(1000);
      cy.url().should("include", button.substring(1));
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
      cy.wait(1000);
      cy.url().should("include", button.substring(1));
    });
  })
});

describe('“Homepage“ page test cases for Trainer role', () => {

  beforeEach(() => {
    performLogin(trainerUsername,password);
  });

  trainerButtons.forEach((button) => {
    it('valid button redirection', () => {
      cy.get(button).click();
      cy.wait(1000);
      cy.url().should("include", button.substring(1));
    });
  })
});

describe('“Homepage“ page test cases for Student role', () => {

  beforeEach(() => {
    performLogin(studentUsername,password);
  });

  studentButtons.forEach((button) => {
    it('valid button redirection', () => {
      cy.get(button).click();
      cy.wait(1000);
      cy.url().should("include", button.substring(1));
    });
  })
});