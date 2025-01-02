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

Cypress.config('defaultCommandTimeout', 2000);
Cypress.config('requestTimeout', 2000);
Cypress.config('responseTimeout', 2000);
Cypress.config('pageLoadTimeout', 2000);

Cypress.on('window:before:load', (win) => {
	Object.defineProperty(win, 'requestAnimationFrame', {
		value: (callback) => setTimeout(callback, 1000 / 60),
	});
});

import 'cypress-file-upload';
