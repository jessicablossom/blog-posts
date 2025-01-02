describe('Log out user', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/home');
		cy.get('input[name="user"]').type('admin');
		cy.get('input[name="password"]').type('123456');
		cy.get('#submit').click();
		cy.url().should('include', '/blog');
		cy.wait(1000);
	});

	it('Should log out successfully', () => {
		cy.get('#logout').should('be.visible');
		cy.get('#logout').click();

		cy.contains('Blog').should('not.exist');
		cy.url().should('include', '/home');
		cy.getCookie('userId').should('not.exist');
	});
});
