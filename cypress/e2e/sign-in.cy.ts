describe('SignIn (e2e)', () => {
  beforeEach(() => {
    cy.visit('/sign-in')
  })

  it('should be able to sign in successfully', () => {
    cy.get('#email').type('johndoe@example.com')
    cy.get('#password').type('12345678')

    cy.contains('button', 'Entrar').click()

    cy.contains('Bem-vindo ao seu painel!').should('be.visible')

    cy.url().should('include', '/links')
  })

  it('should not be able to sign in with same wrong credentials', () => {
    cy.get('#email').type('johndoe@example.comm')
    cy.get('#password').type('12345678')

    cy.contains('button', 'Entrar').click()
    cy.contains('Credenciais inválidas.').should('be.visible')
  })
})
