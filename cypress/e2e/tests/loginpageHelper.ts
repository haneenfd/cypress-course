
import { username, password, submitButton } from '../selectors/loginPageSelectors'

export class LoginPage {

    typeUsername(inputUsername: string) {
        cy.get(username).type(inputUsername);
    }

    typePassword(inputPassword: string) {
        cy.get(password).type(inputPassword);
    }

    clickLoginButton(){
        cy.get(submitButton).click();
    }


}
