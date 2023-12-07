import { LoginPage } from "./loginpageHelper";
const loginPage = new LoginPage();

export function performLogin(username:string,password:string) {
    cy.clearLocalStorage()
    cy.visit('/login');
    loginPage.typeUsername(username);
    loginPage.typePassword(password);
    loginPage.clickLoginButton();
    
}
