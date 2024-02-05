context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Basic Nav', () => {
    cy.url().should('eq', 'http://localhost:4077/')
  })
})
