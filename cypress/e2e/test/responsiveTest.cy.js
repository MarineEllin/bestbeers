describe("Should remove filter icon for viewportWidth < 861px ", () => {
  beforeEach(() => {
    cy.visit("/");
  });

    it('Should display the filter icon in the FilterMenu with viewportWidth=861', { viewportWidth: 861 }, () => {
           cy.get('[data-cy="filterIcon"]').should("be.visible");
      })
    it('Should not display the filter icon in the FilterMenu with viewportWidth=860', { viewportWidth: 860 }, () => {
       cy.get('[data-cy="filterIcon"]').should("not.be.visible");
     })



});