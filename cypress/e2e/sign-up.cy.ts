describe('SignUp (e2e)', () => {
  beforeEach(() => {
    cy.visit('/sign-up')
  })

  it('should be able to sign up successfully', () => {
    cy.get('#name').type('John Doe')
    cy.get('#email').type('johndoe@example.com')
    cy.get('#password').type('12345678')
    cy.get('#confirm_password').type('12345678')

    cy.contains('button', 'Registrar').click()

    cy.contains('Conta criada com sucesso!').should('be.visible')
    cy.contains('button', 'Login').click()

    cy.url().should('include', '/sign-in')
  })

  it('should not be able to sign up with invalid password', () => {
    cy.get('#name').type('John Doe')
    cy.get('#email').type('johndoe@example.comm')
    cy.get('#password').type('1234567')
    cy.get('#confirm_password').type('1234567')

    cy.contains('button', 'Registrar').click()
    cy.contains('A senha deve conter ao menos 8 caracteres.').should(
      'be.visible',
    )
  })

  it('should not be able to sign up when passwords do not match', () => {
    cy.get('#name').type('John Doe')
    cy.get('#email').type('johndoe@example.comm')
    cy.get('#password').type('12345678')
    cy.get('#confirm_password').type('12345679')

    cy.contains('button', 'Registrar').click()
    cy.contains('As senhas devem coincidir.').should('be.visible')
  })

  it('should not be able to sign up with same e-mail twice', () => {
    cy.get('#name').type('John Doe')
    cy.get('#email').type('johndoe@example.comm')
    cy.get('#password').type('12345678')
    cy.get('#confirm_password').type('12345678')

    cy.contains('button', 'Registrar').click()
    cy.contains('O e-mail já está em uso.').should('be.visible')
  })
})
