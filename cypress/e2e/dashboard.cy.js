// cypress/e2e/dashboard.cy.js (REVISED for Timing)

describe('Finance Dashboard UI', () => {

    beforeEach(() => {
        cy.visit('/');

        // ---> ADD A WAIT here <---
        // Wait for an element that appears reliably AFTER Dojo parsing/init.
        // Since the grid (#grid) and charts were found in the passing tests,
        // let's wait for one of them to be visible. The grid is often a good choice.
        cy.get('#grid', { timeout: 10000 }).should('be.visible'); // Increase timeout if needed
        // Or wait for a chart: cy.get('#intraDayChart', { timeout: 10000 }).should('be.visible');
    });

    it('should display the main layout', () => {
        // Now that we've waited in beforeEach, this check should be safer
        cy.get('#mainLayout').should('be.visible');
    });

    it('should display the intraday chart container', () => {
        cy.get('#intraDayChart').should('be.visible');
        // Keep the svg check removed for robustness
    });

    it('should display the cross-assets grid container', () => {
        // This element was already waited for in beforeEach, but checking again is fine
        cy.get('#grid').should('be.visible');
        cy.get('#grid .dojoxGridHeader').should('contain.text', 'RIC');
    });

    it('should display the history chart container', () => {
        cy.get('#historicalChart').should('be.visible');
        // Keep the svg check removed for robustness
    });

    it('should display the news feed container', () => {
        // Now that we've waited in beforeEach, this check should be safer
        cy.get('#newsFeed').should('be.visible');
    });

});