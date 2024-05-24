export class HomePage {
    
    goToActionsPage() {
        cy.visit('/')
        cy.contains('Commands').click()
        cy.contains('Actions').click()
        cy.title().should('eq', 'Cypress.io: Kitchen Sink')
    }

    goToTraversalPage() {
        cy.visit('/')
        cy.contains('Commands').click()
        cy.contains('Traversal').click()
        cy.title().should('eq', 'Cypress.io: Kitchen Sink')
    }

    goToUtilitiesPage() {
        cy.visit('/')
        cy.contains('Utilities').click()
        cy.title().should('eq', 'Cypress.io: Kitchen Sink')
    }

}