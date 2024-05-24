import { ActionsPage } from "cypress/pages/commands/actionsPage";
import { HomePage } from "cypress/pages/homePage";

const actionsPage = new ActionsPage();

describe('Actions Test Spec', () => {

    beforeEach(() => {
        const homePage = new HomePage();
        homePage.goToActionsPage();
    })

    it('Type email into the email address field', () => {
        cy.get(ActionsPage.emailField)
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    })

    it('Try to type in disabled textarea', () => {
        cy.get(ActionsPage.disabledTextArea)
            // Ignore error checking prior to type
            // like whether the input is visible or disabled
            .type('Checking disabled text area', { force: true })
            .should('have.value', 'Checking disabled text area')
    })

    it('Clear the values from a field', () => {
        // First enter text in the field
        cy.get(ActionsPage.describeField)
            .type('This text should be cleared')
            .should('have.value', 'This text should be cleared')

        // Then clear text from the field
        cy.get(ActionsPage.describeField)
            .clear()
            .should('have.value', '')
    })

    it('Submit a coupon code in a form', () => {
        // First enter a value in the coupon code field
        actionsPage.typeCouponCode('HALF-OFF')

        // Then submit
        cy.get(ActionsPage.couponCodeForm)
            .submit()
            .next()
            .should('contain', 'Your form has been submitted!')
    })

    it('Check all the enabled checkboxes', () => {
        cy.get(ActionsPage.checkBoxesSomeDisabled)
            .not('[disabled]')
            .check()
            .should('be.checked')
    })

    it('Check checkbox 2 and 3', () => {
        cy.get(ActionsPage.checkBoxesMulti)
            .check(['checkbox2', 'checkbox3'])
            .should('be.checked')
    })

    it('Check radio 2', () => {
        cy.get(ActionsPage.radioButtons)
            .check('radio2')
            .should('be.checked')
    })

    it('Uncheck all the enabled checkboxes', () => {
        cy.get(ActionsPage.checkBoxesToUncheck)
            .not('[disabled]')
            .uncheck()
            .should('not.be.checked')
    })

    it('Uncheck checkbox 1', () => {
        cy.get(ActionsPage.checkBoxesToUncheck)
            .uncheck('checkbox1')
            .should('not.be.checked')
    })

    it('Select single choice from the drop down', () => {
        cy.get(ActionsPage.singleChoiceDropDown)
            .select('oranges')
            .should('have.value', 'fr-oranges')
    })

    it('Select multiple choices from the list', () => {
        cy.get(ActionsPage.multiChoiceList)
            .select(['apples', 'bananas'])
            // when getting multiple values, invoke "val" method first
            .invoke('val')
            .should('deep.equal', ['fr-apples', 'fr-bananas'])
    })

})