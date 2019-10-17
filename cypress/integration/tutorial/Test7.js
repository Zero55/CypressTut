describe('My Seventh Test Suite', function() {
  it('still dont do a whole lotta jack shit', function() {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('#opentab').then(function(el) {
      const url = el.prop('href');
      cy.log(url);
      cy.request(url)
        .its('body')
        .should('include', '<html>');
    });
  });
});
