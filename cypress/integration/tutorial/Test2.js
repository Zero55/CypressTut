/// <reference types="Cypress" />

describe('My Second Test', function() {
  it('It still does not do much!', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);
    cy.get('.product:visible').should('have.length', 4);
    //parent child chaining
    cy.get('.products')
      .find('.product')
      .should('have.length', 4);
    cy.get('.products')
      .find('.product')
      .eq(2)
      .contains('ADD TO CART')
      .click();
    cy.get('.products')
      .find('.product')
      .each(($el, index, $list) => {
        const textVeg = $el.find('h4.product-name').text();
        const btn = $el.find('button');
        if (textVeg.includes('Cashews')) {
          btn.click();
        }
      });
    cy.get('.cart-icon > img').click();
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.wait(2000);
    cy.contains('Place Order').click();
  });
});
