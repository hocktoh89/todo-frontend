const todoItems = 
[
    "Buy Apples and Bananas",
    "Buy Chicken Rice"
];

const editedToDo = "See Doctor"  

const expectedResults = 
[
    todoItems[0],
    editedToDo
];

before(() => {
    cy.visit("http://localhost:3000");
})
  
after(() => {
    cy.get('[data-cy=deleteToDosBtn]').click();
})

beforeEach(() => {
    cy.get('[data-cy=newToDoBtn]').within(() => {
        cy.get('input').type(todoItems[0])
        cy.get('button').contains('Add').click()
      })

      cy.get('[data-cy=newToDoBtn]').within(() => {
        cy.get('input').type(todoItems[1])
        cy.get('button').contains('Add').click()
      })
})

describe('Edit To Do Item', () => {


    it('Edit successful', () => {
        cy.get('[data-cy=toDoList]').find('li').should('have.length', 2);
        cy.get('[data-cy=toDoList]').find('input').eq(0).should('have.value', todoItems[0]);

        cy.get('[data-cy=toDoList]').find('li').eq(1).find('[data-cy=editToDoBtn]').click();
        cy.get('[data-cy=toDoList]').find('li').eq(1).find('input').focus().clear().type('See Doctor');
        cy.get('[data-cy=toDoList]').find('li').eq(1).find('[data-cy=editToDoBtn]').click();

        cy.get('[data-cy=toDoList]').find('input').eq(0).should('have.value', expectedResults[0]);
        cy.get('[data-cy=toDoList]').find('input').eq(1).should('have.value', expectedResults[1]);

    });
  })