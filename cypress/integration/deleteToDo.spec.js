const todoItems = 
[
    "watch Movie",
    "Play Piano",
    "Buy Chicken Rice"
];

const expectedResults = 
[
    todoItems[0],
    todoItems[2]
];

before(() => {
    cy.intercept('GET', '/todos', { fixture: 'todos.json' });
    cy.intercept('DELETE', '/todos/*', {
        statusCode: 204,
        body: {
            data: {}
        },
    });
    cy.visit("http://localhost:3000");
})

describe('Delete Single To Do Item', () => {

    it('Delete successful', () => {
        cy.intercept('GET', '/todos', { fixture: 'todosDeleteOne.json' });

        cy.get('[data-cy=toDoList]').find('li').should('have.length', 3);
        cy.get('[data-cy=toDoList]').find('input').eq(0).should('have.value', todoItems[0]);
        cy.get('[data-cy=toDoList]').find('input').eq(1).should('have.value', todoItems[1]);
        cy.get('[data-cy=toDoList]').find('input').eq(2).should('have.value', todoItems[2]);

        cy.get('[data-cy=toDoList]').find('li').eq(1).find('[data-cy=deleteToDoBtn]').click();

        cy.get('[data-cy=toDoList]').find('input').eq(0).should('have.value', expectedResults[0]);
        cy.get('[data-cy=toDoList]').find('input').eq(1).should('have.value', expectedResults[1]);
        cy.get('[data-cy=toDoList]').find('li').should('have.length', 2);

    });
  })