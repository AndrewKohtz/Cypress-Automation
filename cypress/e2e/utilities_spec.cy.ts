import { HomePage } from "cypress/pages/homePage";
import { UtilitiesPage } from "cypress/pages/utilitiesPage";

const utilitiesPage = new UtilitiesPage();

describe('Utilities Test Spec', () => {

    beforeEach(() => {
        const homePage = new HomePage();
        homePage.goToUtilitiesPage();
    })

    it('Call a jQuery method to select first item', () => {
        let $li = Cypress.$(UtilitiesPage.jQuery)

        cy.wrap($li).should('not.have.class', 'active')
        cy.wrap($li).click()
        cy.wrap($li).should('have.class', 'active')
    })

})