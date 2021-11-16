import homePage from '../pages/homePage'

describe('Test the Login', () => {




  it('When I visit the Home Page', () => {

    homePage.goto()

cy.get('#accept-all-cookies-button').click()
    cy.get('#log-in')
    .should('be.visible')
    cy.get('#log-in').click()



     })

     it('And I successfully Login', () => {

     cy.get('#email-input')
       .type(homePage.username)
       cy.get('#password-input')
              .type(homePage.password)
       cy.get('#submit-button').click()
       cy.get('.btn-user-details__name')
           .should('be.visible')

          })

})
