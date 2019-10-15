import HomePage from '../../support/HomePage';
import ProductsPage from '../../support/ProductsPage';

describe('My 8 Test Suite', function() {
  before(function() {
    cy.fixture('userFixture').then(data => {
      this.data = data;
    });
  });

  it('maybe it do smtn useful now, idk', function() {
    const homePage = new HomePage();
    const productsPage = new ProductsPage();

    cy.visit(Cypress.env('url'));

    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.getTwoWayDataBinding().should('have.value', this.data.name);
    homePage.getEditBox().should('have.attr', 'minlength', '2');
    homePage.getEntrepeneur().should('be.disabled');
    //
    homePage.getShopTab().click();

    this.data.productName.forEach(element => {
      cy.selectProduct(element);
    });
    productsPage.getCartButton().click();
    let addedTotals = 0;
    productsPage
      .getPriceTotalColumn()

      .each(($el, index, $list) => {
        const scrubTotals = Number($el.text().match(/\d+/)[0]);
        addedTotals += scrubTotals;
      })
      .then(() => {
        cy.log('AddedTotals: ' + addedTotals);
      });
    cy.get('h3 strong').then(element => {
      const scrubTotalPrice = Number(element.text().match(/\d+/)[0]);
      cy.log('TotalPrice: ' + scrubTotalPrice);
      expect(scrubTotalPrice).to.equal(addedTotals);
    });
    productsPage.getCheckoutButton().click();
    productsPage.getShipField().type('India');
    cy.wait(6000);
    productsPage.getShipSuggestion().click();
    productsPage.getCheckboxButton().click({ force: true });
    productsPage.getPurchaseButton().click();
    productsPage.getAlert().then(element => {
      const actualText = element.text();
      expect(actualText.includes('Success')).to.be.true;
    });
  });
});
