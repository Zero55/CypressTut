class ProductsPage {
  getCartButton() {
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
  }
  getContinueShopButton() {
    return cy.get(':nth-child(4) > .btn');
  }
  getCheckoutButton() {
    return cy.get(':nth-child(4) > :nth-child(5) > .btn');
  }
  getShipField() {
    return cy.get('#country');
  }
  getShipSuggestion() {
    return cy.get('.suggestions > ul > li > a');
  }
  getCheckboxButton() {
    return cy.get('input#checkbox2');
  }
  getPurchaseButton() {
    return cy.get('.ng-untouched > .btn');
  }
  getAlert() {
    return cy.get('.alert');
  }
  getPriceTotalColumn() {
    return cy.get('tr td:nth-child(4) strong');
  }
}
export default ProductsPage;
