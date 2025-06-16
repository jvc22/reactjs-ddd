describe('Delete link (e2e)', () => {
  beforeEach(() => {
    document.cookie = `token=test-jwt; path=/`

    cy.visit('/links')
  })

  it('should be able to delete a link', () => {
    cy.contains('span.sr-only', 'Excluir')
      .first()
      .parent('button')
      .click()
      .should('be.disabled')

    cy.contains('Link deletado com sucesso!').should('be.visible')
    cy.contains('Total de 21 item(s)').should('be.visible')
  })
})
