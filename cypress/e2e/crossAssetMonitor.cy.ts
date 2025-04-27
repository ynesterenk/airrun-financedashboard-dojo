describe('CrossAssetMonitor', () => {
  beforeEach(() => {
    cy.visit('/'); // Assuming the plugin is rendered on the main page
    cy.intercept('GET', '/api/asset-data', { fixture: 'assetData.json' }).as('getAssetData');
  });

  it('renders the Cross Asset Monitor plugin', () => {
    cy.get('[data-testid="cross-asset-monitor"]').should('exist');
    cy.get('[data-testid="cross-asset-monitor-title"]').should('contain', 'Cross Asset Monitor');
  });

  it('displays asset data correctly', () => {
    cy.wait('@getAssetData');
    cy.get('[data-testid="asset-row"]').should('have.length', 4); // Assuming 4 assets in the fixture
    cy.get('[data-testid="asset-name"]').first().should('contain', 'S&P 500');
    cy.get('[data-testid="asset-price"]').first().should('contain', '4500.21');
    cy.get('[data-testid="asset-change"]').first().should('contain', '+0.75%');
  });

  it('handles loading state', () => {
    cy.intercept('GET', '/api/asset-data', (req) => {
      req.on('response', (res) => {
        res.setDelay(2000);
      });
    }).as('delayedAssetData');

    cy.visit('/');
    cy.get('[data-testid="loading-indicator"]').should('be.visible');
    cy.wait('@delayedAssetData');
    cy.get('[data-testid="loading-indicator"]').should('not.exist');
  });

  it('handles error state', () => {
    cy.intercept('GET', '/api/asset-data', { statusCode: 500, body: 'Server Error' }).as('failedAssetData');
    cy.visit('/');
    cy.wait('@failedAssetData');
    cy.get('[data-testid="error-message"]').should('contain', 'Failed to fetch asset data');
  });
});