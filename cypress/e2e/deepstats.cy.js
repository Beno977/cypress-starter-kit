describe('My First Test', () => {
    it('Deepstats', () => {
      cy.visit('/');
      cy.get('[routerlink="./teams"]').click();
      cy.get('.table-main-section-row-w:first-child .table-main-column-w').click();
    //   cy.get('[routerlink="player-statistics"]').click();
      cy.get('.players-header > button').click();
      //cy.get('.close-popup').click();
      cy.get('.popup-container .min-table-main-row:first-child').click();
    })
  });