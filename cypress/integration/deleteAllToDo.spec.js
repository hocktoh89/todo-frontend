const todoItems = 
[
    "Buy Milk",
    "Buy Magazines",
    "Buy Pizza"
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

      cy.get('[data-cy=newToDoBtn]').within(() => {
        cy.get('input').type(todoItems[2])
        cy.get('button').contains('Add').click()
      })
})

describe('Delete Single To Do Item', () => {


    it('Delete successful', () => {
        cy.get('[data-cy=toDoList]').find('li').should('have.length', 3);
        cy.get('[data-cy=toDoList]').find('input').eq(0).should('have.value', todoItems[0]);
        cy.get('[data-cy=toDoList]').find('input').eq(1).should('have.value', todoItems[1]);
        cy.get('[data-cy=toDoList]').find('input').eq(2).should('have.value', todoItems[2]);

        cy.get('[data-cy=deleteToDosBtn]').click();

        cy.get('[data-cy=toDoList]').find('li').should('have.length', 0);

    });
  })