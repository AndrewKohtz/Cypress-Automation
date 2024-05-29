export class TodoPage {

    static todoList = '.todo-list li';
    static newTodoField = '[data-test=new-todo]';

    CompleteToDoItem(itemToComplete: string) {
        // Use the `contains` command to get an element by its contents.
        // Find the <input> element for this <label> by traversing up to the parent element.
        // From there, we can `find` the child checkbox <input> element and use the `check` command.
        cy.contains(itemToComplete)
            .parent()
            .find('input[type=checkbox]')
            .check()
        
        // Make sure the item is now checked
        // Again we'll use `contains` to find the <label> element and then use the `parents` command
        // to traverse multiple levels up the dom until we find the corresponding <li> element.
        // Once we get that element, we can assert that it has the completed class.
        cy.contains(itemToComplete)
            .parents('li')
            .should('have.class', 'completed')
    }

}