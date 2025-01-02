describe('Blog Post CRUD Operations', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/home');
		cy.get('input[name="user"]').type('admin');
		cy.get('input[name="password"]').type('123456');
		cy.get('#submit').click();

		cy.url().should('include', '/blog');
	});

	it('Should add a new post and update the list', () => {
		cy.get('#add').click();
		cy.wait(1000);
		cy.screenshot('add-post');
		cy.get('input[name="title"]').type('Testing Cypress');
		cy.get('input[name="author"]').type('John Smith');
		cy.get('textarea[name="description"]').type(
			`What you'll learn: The solutions Cypress provides for testing. The features of Cypress App, Cypress Cloud, UI Coverage, and Cypress Accessibility. Our mission and what we believe in. Key differences between Cypress and other testing tools`
		);
		cy.get('input[name="author"]').click();
		cy.get('#upload').click();
		cy.get('input[type="file"]').attachFile('test-image.jpg');
		cy.wait(1000);
		cy.get('#save').click();
		cy.wait(1000);
		cy.contains('Cypress').should('be.visible');
	});

	it('Should edit an existing post and update the list', () => {
		cy.get('.post-card').first().get('#more').click();
		cy.wait(1000);
		cy.get('#edit-post').click();
		cy.screenshot('edit-post');

		cy.get('input[name="title"]').clear().type('Testing Cypress + Edited');
		cy.wait(1000);
		cy.get('#save').click();
		cy.reload();
		cy.wait(1000);
		cy.contains('Testing Cypress + Edited').should('exist');
	});

	it('Should delete a post and update the list', () => {
		cy.get('.post-card').first().get('#more').click();
		cy.wait(1000);
		cy.get('#delete-post').click();
		cy.screenshot('delete-post');
		cy.contains('Confirmar eliminación').should('exist');
		cy.wait(1000);
		cy.get('#confirm').click();
		cy.reload();
		cy.get('.post-card-title').should('not.have.text', /^Testing Cypress/);
	});
});
