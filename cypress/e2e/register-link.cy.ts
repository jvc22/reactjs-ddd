describe('Register link (e2e)', () => {
  beforeEach(() => {
    document.cookie = `token=test-jwt; path=/`

    cy.visit('/links')

    cy.contains('button', 'Adicionar novo link').click()
  })

  it('should be able to register a new link', () => {
    cy.get('#title').type('My GitHub profile')
    cy.get('#url').type('https://github.com/me')

    cy.contains('button', 'Salvar').click()

    cy.contains('Link registrado com sucesso!').should('be.visible')
    cy.contains('Total de 23 item(s)').should('be.visible')
  })

  it('should not be able to register a link with empty fields', () => {
    cy.get('#url').type('https://github.com/me')

    cy.contains('button', 'Salvar').click()

    cy.contains('Forneça um título válido.').should('be.visible')

    cy.get('#title').type('My GitHub profile')
    cy.get('#url').clear()

    cy.contains('Forneça uma URL válida.').should('be.visible')
  })
})
