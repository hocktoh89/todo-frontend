before(() => {
    cy.visit("http://localhost:3000");
  })
  
after(() => {
    cy.get('[data-cy=deleteToDosBtn]').click();
})

  describe('Add New To Do Item', () => {

    const todoItems = [ 
        'See Doctor',
        'Watch Movie',
        'Play Football'
    ];

    it('Add New ToDo', () => {
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

        cy.get('[data-cy=toDoList]').find('li').should('have.length', 3);
    
        cy.get('[data-cy=toDoList]').find('input').eq(0).should('have.value', 'See Doctor');
        cy.get('[data-cy=toDoList]').find('input').eq(1).should('have.value', 'Watch Movie');
        cy.get('[data-cy=toDoList]').find('input').eq(2).should('have.value', 'Play Football');

    });
  })