export class LoginPage {

    typeUsername(username: string) {
        cy.get('[name="username"]').type(username);
    }

    typePassword(password: string) {
        cy.get('[name="password"]').type(password);
    }

    clickLoginButton(){
        cy.get('button[type="submit"]').click();
    }


}
