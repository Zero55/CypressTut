/// <reference types="Cypress" />

describe('My Third Test', function() {
  it('It still does not do much!', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    //checkboxes
    cy.get('#checkBoxOption1')
      .check()
      .should('be.checked')
      .and('have.value', 'option1');
    cy.get('#checkBoxOption1')
      .uncheck()
      .should('not.be.checked');

    cy.get('input[type="checkbox"]').check(['option2', 'option3']);

    //static dropdown
    cy.get('select')
      .select('option2')
      .should('have.value', 'option2');

    //dynamic dropdown
    cy.get('#autocomplete').type('ind');

    cy.get('.ui-menu-item div').each(($el, index, $list) => {
      if ($el.text() === 'India') {
        $el.click();
      }
    });
    cy.get('#autocomplete').should('have.value', 'India');
  });
});
