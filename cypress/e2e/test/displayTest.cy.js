describe("Should display my app : Header, FilterMenu, Homepage, Beer", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should find my logo in the Header", () => {
    cy.findByAltText(/logo/);
  })

  it("Should find Alcohol by volume text in the FilterMenu", () => {
    cy.contains(/Alcohol by volume/);
   })

   it("Should display on the Load more button", () => {
     cy.get('[data-cy="loadMoreBeersButton"]');
   })

   it("Should display the beer description", () => {
    cy.get('[data-cy="beerDescription"]');
   })

});

