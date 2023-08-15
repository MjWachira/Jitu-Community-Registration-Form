describe('visiting registration page', () => {
    it('it passes if index.html is visited', () => {
        cy.visit('http://127.0.0.1:5500/index.html')
      })
      it('passes if divs exist', () => {
        cy.visit('http://127.0.0.1:5500/index.html')
        cy.get('div')
      })
      it('passes if there is type text in the page', () => {
        cy.visit('http://127.0.0.1:5500/index.html')
        cy.get('[type="text"]')
      })
      it('passes if a submit button is found', () => {
        cy.visit('http://127.0.0.1:5500/index.html')
        cy.get('[type="submit"]')
      })
      it('passes', () => {
        cy.visit('http://127.0.0.1:5500/index.html')
      })
      it('passes', () => {
        cy.visit('http://127.0.0.1:5500/index.html')
      })
      it('passes', () => {
        cy.visit('http://127.0.0.1:5500/index.html')
      })
  })