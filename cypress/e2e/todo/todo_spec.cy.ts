import { TodoPage } from "cypress/pages/todo/todoPage";

const todoPage = new TodoPage();

describe('Example ToDo App Spec', () => {

    beforeEach(() => {
        cy.visit('/todo')
    })

    it('Displays two todo items by default', () => {
        // Make sure there's two items
        cy.get(TodoPage.todoList)
            .should('have.length', 2)

        // Check the values of the first and the last items
        cy.get(TodoPage.todoList)
            .first()
            .should('have.text', 'Pay electric bill')
        cy.get(TodoPage.todoList)
            .last()
            .should('have.text', 'Walk the dog')
    })

    it('Can add a new todo item', () => {

        const newItem = 'Feed the cat'

        // Add the item
        cy.get(TodoPage.newTodoField)
            .type(`${newItem}{enter}`)

        // Make sure the item is now in the list
        cy.get(TodoPage.todoList)
            .should('have.length', 3)
            .last()
            .should('have.text', newItem)
    })

    it('Can check off an item as completed', () => {

        todoPage.CompleteToDoItem('Pay electric bill')

    })

    context('With a checked task', () => {

        const completedItem = 'Pay electric bill'
        const incompletedItem = 'Walk the dog'

        beforeEach(() => {
            todoPage.CompleteToDoItem(completedItem)
        })

        it('Can filter for uncompleted tasks', () => {
            // Click on the "active" button to display only incomplete items
            cy.contains('Active')
                .click()

            // There should be only one incomplete item remaining in the list
            cy.get(TodoPage.todoList)
                .should('have.length', 1)
                .first()
                .should('have.text', incompletedItem)

            // Make sure the completed item is NOT in the list
            cy.contains(completedItem)
                .should('not.exist')
        })

        it('Can filter for completed tasks', () => {
            // Click on the "completed" button to display only completed items
            cy.contains('Completed')
                .click()

            // There should be only one completed item remaining in the list
            cy.get(TodoPage.todoList)
                .should('have.length', 1)
                .first()
                .should('have.text', completedItem)

            // Make sure the incompleted item is NOT in the list
            cy.contains(incompletedItem)
                .should('not.exist')
        })

        it('Can delete all completed tasks', () => {
            // Click on the "Clear completed" button to remove completed items
            cy.contains('Clear completed')
                .click()

            // Make sure that there is only one element left to display
            // And the completed element does not exist
            cy.get(TodoPage.todoList)
                .should('have.length', 1)
                .should('not.have.text', completedItem)

            // Make sure the clear button no longer shows
            cy.contains('Clear completed')
                .should('not.exist')
        })

    })

})

