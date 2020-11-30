/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://food-manager.netlify.app/')
  })

  // https://on.cypress.io/interacting-with-elements


  it('Teste para criar conta', () => {
    cy.get('.new-user').click()
    cy.get('#formBasicUsername')
      .type('fakename').should('have.value', 'fakename')
    
    cy.get('#formBasicEmail')
      .type('fake@email.com').should('have.value', 'fake@email.com')

    cy.get('#formBasicPassword')
      .type('fakepassword')

    cy.get('#formBasicConfirmPassword')
      .type('fakepassword')

    cy.get('.btn-primary').click()
      
  });

  it('Teste entrar e sair da conta', () => {
    cy.get('#formBasicUsername')
      .type('fakename').should('have.value', 'fakename')
    
    cy.get('#formBasicPassword')
      .type('fakepassword')

    cy.get('.btn-primary').click()

    cy.get('.right-content-navbar p').click()
  });

  it('Teste entrar e cadastrar produto', () => {
    cy.get('#formBasicUsername')
      .type('fakename').should('have.value', 'fakename')
    
    cy.get('#formBasicPassword')
      .type('fakepassword')

    cy.get('.btn-primary').click()

    cy.get('#register-button').click()

    cy.get('#label-input-wrapper1')
      .type('feijoada')

    cy.get('#label-input-wrapper2')
      .type('10')

    cy.get('#label-input-wrapper3')
      .type('15')
  });

  it('Teste entrar e cadastrar produto', () => {
    cy.get('#formBasicUsername')
      .type('fakename').should('have.value', 'fakename')
    
    cy.get('#formBasicPassword')
      .type('fakepassword')

    cy.get('.btn-primary').click()

    cy.get('.box-footer-content .box-product-wrapper #register-button').click()

    cy.get('.label-input-wrapper input')
      .type('2')

    cy.get('header button').click()

  });




});
