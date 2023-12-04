
import { username, password, submitButton } from '../selectors/loginPageSelectors'

export class LoginPage {

    typeUsername(usernamee: string) {
        cy.get(username).type(usernamee);
    }

    typePassword(passwordd: string) {
        cy.get(password).type(passwordd);
    }

    clickLoginButton(){
        cy.get(submitButton).click();
    }


}
