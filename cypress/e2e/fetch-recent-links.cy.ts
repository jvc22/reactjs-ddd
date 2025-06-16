describe('Fetch recent links (e2e)', () => {
  before(() => {
    document.cookie = `token=test-jwt; path=/`

    cy.visit('/links')
  })

  it('should be able to fetch recent links', () => {
    cy.contains('Total de 22 item(s)').should('be.visible')
    cy.contains('Página 1 de 3').should('be.visible')
  })
})
