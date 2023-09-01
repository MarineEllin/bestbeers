describe("Should display my app : Header, FilterMenu, Homepage, Beer", () => {
  before(() => {
  cy.intercept('https://api.punkapi.com/v2/beers?abv_gt=0&ibu_lt=100&page=1&per_page=12', {fixture: "beersList"}).as("fetchedBeersList");
  cy.visit("/");
   });

   it("First request should be of type GET ", () => {
    cy.wait('@fetchedBeersList').its('request.method').should('equal', 'GET');
   })

});