// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (username, password) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:5000/api/v1/auth/login',
    body: {
      username: username,
      password: password,
    },
  }).then((response) => {
    cy.log(response.body)
    const accessToken = response.body.accessToken;
    
    // Use cy.setLocalStorage to store the access token in the local storage
    cy.setLocalStorage('access-token', accessToken);
  });
});

Cypress.Commands.add('setLocalStorage', (key, value) => {
  cy.window().then((win) => {
    win.localStorage.setItem(key, JSON.stringify(value));
  });
});

Cypress.Commands.add('getLocalStorage', (key) => {
  return cy.window().then((win) => {
    const value = win.localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  });
});
