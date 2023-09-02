import { Constants } from "../../../src/constants/constants.ts";

describe("Should display 12 more beers on click on Load more", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should display 12 beers", () => {
    cy.get('[data-cy="beerCard"]').should(
      "have.length",
      Constants.INITIAL_NUMBER_OF_BEERS_DISPLAYED
    );
  });

  it("Should display 24 beers", () => {
    cy.get('[data-cy="loadMoreBeersButton"]').click();
    cy.get('[data-cy="beerCard"]').should(
      "have.length",
      2 * Constants.INITIAL_NUMBER_OF_BEERS_DISPLAYED
    );
  });
});
