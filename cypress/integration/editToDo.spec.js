const todoItems = 
[
    "watch Movie",
    "Play Piano",
    "Buy Chicken Rice"
];

const editedToDo = "See Doctor"  

const expectedResults = 
[
    todoItems[0],
    editedToDo,
    todoItems[2],
];

before(() => {
    cy.intercept('GET', '/todos', { fixture: 'todos.json' });
    cy.intercept('PUT', '/todos/*', {
        statusCode: 200,
        body: {
            data: {
                _id: "60bcb7549714ae510dd8316b",
                text: editedToDo,
                __v: 0
            }
        },
    });

    cy.visit("http://localhost:3000");
})

describe('Edit To Do Item', () => {


    it('Edit successful', () => {
        cy.get('[data-cy=toDoList]').find('li').should('have.length', 3);
        cy.get('[data-cy=toDoList]').find('input').eq(0).should('have.value', todoItems[0]);

        cy.get('[data-cy=toDoList]').find('li').eq(1).find('[data-cy=editToDoBtn]').click();
        cy.get('[data-cy=toDoList]').find('li').eq(1).find('input').focus().clear().type('See Doctor');
        cy.get('[data-cy=toDoList]').find('li').eq(1).find('[data-cy=editToDoBtn]').click();

        cy.get('[data-cy=toDoList]').find('input').eq(0).should('have.value', expectedResults[0]);
        cy.get('[data-cy=toDoList]').find('input').eq(1).should('have.value', expectedResults[1]);

    });
  })