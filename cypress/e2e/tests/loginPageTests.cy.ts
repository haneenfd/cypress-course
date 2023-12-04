import { LoginPage } from "./loginpageHelper";
const loginPage = new LoginPage();

describe('“Login“ page test cases', () => {
  beforeEach(() => {
    cy.visit('https://ptuk-trainerize.onrender.com/login');
  });

  it('valid login', () => {
    loginPage.typeUsername("ptuk.en");
    loginPage.typePassword("123");
    loginPage.clickLoginButton();
    cy.url().should("not.include", "/login");
  });

  it('invalid password', () => {
    loginPage.typeUsername("ptuk.en");
    loginPage.typePassword("1234");
    loginPage.clickLoginButton();
    cy.url().should("include", "/login");
  });

  it('invalid username', () => {
    loginPage.typeUsername("ptuk.eng");
    loginPage.typePassword("123");
    loginPage.clickLoginButton();
    cy.url().should("include", "/login");
  });

  it('contain image', () => {
    cy.wait(1000);
    cy.get('img').should("be.visible");
    cy.url().should("include", "/login");
  });
  
    

});
