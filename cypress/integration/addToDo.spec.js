const todoItems = 
[
    "Play Piano"
];

before(() => {
    cy.intercept('GET', '/todos', { 
      statusCode: 200,
      body: {
          data: []
      },
    });

    cy.intercept('POST', '/todos', { 
      statusCode: 201,
      body: {
          data: {
              toDoId: "60bcc98ceb7b13128a438f02",
              text: "Play Piano"
            }
      },
    });

    cy.visit("http://localhost:3000");
  })

  describe('Add New To Do Item', () => {

    it('Add New ToDo', () => {
        cy.intercept('GET', '/todos', { 
          statusCode: 200,
          body: {
              data: [
                {
                  "_id": "60bcb7549714ae510dd8316b",
                  "text": "Play Piano",
                  "__v": 0
                }
              ]
        },});

        cy.get('[data-cy=toDoList]').find('li').should('have.length', 0);
        
        cy.get('[data-cy=newToDoBtn]').within(() => {
            cy.get('input').type(todoItems[0])
            cy.get('button').contains('Add').click()
          })

        cy.get('[data-cy=toDoList]').find('li').should('have.length', 1);
    
        cy.get('[data-cy=toDoList]').find('input').eq(0).should('have.value', todoItems[0]);

    });
  })