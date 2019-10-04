describe('My Fifth Test Suite', function() {
  it('still dont do a whole lotta jack shit', function() {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // cy.get('div.mouse-hover-content')
    //   .invoke('show')
    //   .children()
    //   .should('contain.text');

    const children = cy
      .get('div.mouse-hover-content')
      .invoke('show')
      .children();
    console.log(children);
  });
});
