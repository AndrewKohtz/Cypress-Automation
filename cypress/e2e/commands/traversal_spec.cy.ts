import { TraversalPage } from "cypress/pages/commands/traversalPage";
import { HomePage } from "cypress/pages/homePage";

describe('Traversal Test Spec', () => {

    beforeEach(() => {
        const homePage = new HomePage();
        homePage.goToTraversalPage();
    })

    it('Get active in breadcrumb', () => {
        cy.get(TraversalPage.breadCrumbNavigation)
            .children('.active')
            .should('contain', 'Data')
    })

    it('Get specific element from list by index', () => {
        cy.get(TraversalPage.itemsListCats)
            .eq(1)
            .should('contain', 'siamese')
    })

    it('Get get the next element from a list', () => {
        cy.get(TraversalPage.itemsListFruit)
            .contains('apples')
            .next().should('contain', 'oranges')
    })

})