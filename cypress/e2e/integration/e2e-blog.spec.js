describe('E2E Blog Post Integration', () => {
	it('Should log in, add, edit, and delete a post, and log out', () => {
		// Paso 1: Loguearse
		cy.visit('http://localhost:3000/home');
		cy.wait(2000);
		cy.get('input[name="user"]').type('admin');
		cy.get('input[name="password"]').type('123456');
		cy.get('#submit').click();
		cy.url().should('include', '/blog');
		cy.wait(2000);

		cy.get('.post-card').should('exist');

		// Paso 2: Agregar post
		cy.get('#create').click();
		cy.wait(1000);
		cy.screenshot('create-post');
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

		// Paso 2: Editar post

		cy.get('#more').click();
		cy.get('#edit-post').click();
		cy.wait(1000);
		cy.get('input[name="title"]').clear().type('Testing Cypress + Edited');
		cy.get('#save').click();
		cy.wait(2000);
		cy.reload();
		cy.wait(2000);

		cy.contains('Testing Cypress + Edited').should('exist');

		// Paso 2: Borrar post
		cy.get('.post-card').first().get('#more').click();
		cy.wait(1000);
		cy.get('#delete-post').click();
		cy.screenshot('delete-post');
		cy.contains('Confirmar eliminación').should('exist');
		cy.get('#confirm').click();
		cy.wait(2000);
		cy.reload();
		cy.wait(2000);
		cy.contains('Testing Cypress').should('not.exist');

		// Logout
	});
});
