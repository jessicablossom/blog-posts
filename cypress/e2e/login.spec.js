describe('Login', () => {
	it('should load the login form', () => {
		cy.visit('http://localhost:3000/home');
		cy.contains('Acceso').should('be.visible');
		cy.get('input[name="user"]').should('be.visible');
		cy.get('input[name="password"]').should('be.visible');
		cy.get('#submit').should('be.visible');
		cy.screenshot('login-form');
	});

	it('should show an error message when credentials are invalid', () => {
		cy.visit('http://localhost:3000/home');
		cy.get('input[name="user"]').type('admin');
		cy.get('input[name="password"]').type('1234');
		cy.get('#submit').click();
		cy.wait(1000);
		cy.contains('Error').should('be.visible');
	});

	it('should redirect to /blog when credentials are valid', () => {
		cy.visit('http://localhost:3000/home');
		cy.get('input[name="user"]').type('admin');
		cy.get('input[name="password"]').type('123456');
		cy.get('#submit').click();
		cy.url().should('include', '/blog');
		cy.getCookie('userId').should('exist');
		cy.wait(1000);
		cy.screenshot('login-exitoso');
	});
});
