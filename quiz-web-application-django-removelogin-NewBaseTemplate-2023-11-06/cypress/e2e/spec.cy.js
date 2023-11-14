describe('Navigate and submit quiz', () => {
  it('Visits Annual Conference Website', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.contains('Quiz').click()
    cy.url().should('include','/quiz/')
    cy.get('textarea')
    cy.get('textarea').type('Take data from Data Management framework and fill it into here')
    cy.get('input')
    cy.contains('Submit').click()
    cy.contains('Enter the Prize Draw for a Chance to Win').click()
  })
})
