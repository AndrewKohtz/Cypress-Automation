export class ActionsPage {

    static emailField = '.action-email';
    static disabledTextArea = '.action-disabled';
    static describeField = '.action-clear';
    static checkBoxesSomeDisabled = '.action-checkboxes [type="checkbox"]';
    static checkBoxesMulti = '.action-multiple-checkboxes [type="checkbox"]';
    static radioButtons = '.action-radios [type="radio"]';
    static checkBoxesToUncheck = '.action-check [type="checkbox"]';
    static singleChoiceDropDown = '.action-select';
    static multiChoiceList = '.action-select-multiple';

    static couponCodeForm = '.action-form';
    static couponCodeField = '[id="couponCode1"]';

    typeCouponCode(couponCode: string) {
        cy.get(ActionsPage.couponCodeForm)
            .find(ActionsPage.couponCodeField)
            .type(couponCode)
            .should('have.value', couponCode)
    }

}