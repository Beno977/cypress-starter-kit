describe('My First Test', () => {
    it('Deepstats', () => {
      cy.visit('/');
      cy.get('[routerlink="./teams"]').click();
      cy.get('.table-main-section-row-w:first-child .table-main-column-w').click();
    //   cy.get('[routerlink="player-statistics"]').click();
      cy.get('.players-header > button').click();
      //cy.get('.close-popup').click();
      cy.get('.popup-container .min-table-main-row:first-child').click();
      cy.get('.search-container').click();
      cy.get('input').type('Artur');
      //cy.get('.search-r-tabs').click();
      cy.get('.search-r-tabs p[_ngcontent-serverApp-c4]:last-child').click();
      cy.get('.search-inner-wrapper > div:nth-child(2)').click();
      cy.get('.open-close-bl').click();
      cy.get('.open-close-bl').click();
      cy.get('.personal-rec-info:first-child').click();
      cy.get('.ref-link').trigger('mouseover');
      cy.get('.min-table-col main:first-child').click();
       })
  });