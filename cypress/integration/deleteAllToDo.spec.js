const todoItems = 
[
    "watch Movie",
    "Play Piano",
    "Buy Chicken Rice"
];

before(() => {
    cy.intercept('GET', '/todos', { fixture: 'todos.json' });
    cy.intercept('DELETE', 'delete_all/todos', {
      statusCode: 204,
      body: {
          data: {}
      },
  });
    cy.visit("http://localhost:3000");
})

describe('Delete All To Do Item', () => {


    it('Delete successful', () => {
        cy.intercept('GET', '/todos', { 
          statusCode: 200,
          body: {
              data: []
        },});

        cy.get('[data-cy=toDoList]').find('li').should('have.length', 3);
        cy.get('[data-cy=toDoList]').find('input').eq(0).should('have.value', todoItems[0]);
        cy.get('[data-cy=toDoList]').find('input').eq(1).should('have.value', todoItems[1]);
        cy.get('[data-cy=toDoList]').find('input').eq(2).should('have.value', todoItems[2]);

        cy.get('[data-cy=deleteToDosBtn]').click();

        cy.get('[data-cy=toDoList]').find('li').should('have.length', 0);

    });
  })