describe('My Fourth Test Suite', function() {
  it('still dont do a whole lotta jack shit', function() {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    cy.get('#alertbtn').click();

    cy.get('#confirmbtn').click();
    //window:alert
    cy.on('window:alert', str => {
      //Moooocha
      expect(str).to.equal(
        'Hello , share this practice page and share your knowledge'
      );
    });
    cy.on('window:confirm', str => {
      //Moooocha
      expect(str).to.equal('Hello , Are you sure you want to confirm?');
    });

    cy.get('#opentab')
      .invoke('removeAttr', 'target')
      .click();

    cy.url().should('include', 'qaclickacademy');

    cy.go('back');
  });
});
