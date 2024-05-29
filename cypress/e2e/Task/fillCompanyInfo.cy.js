const fillCompanyInfo = () => {
  cy.get('[name="Company Name"]').type('John Doe Inc.');
  cy.get('[name="Fiscal Year Start"]').select('January');
  cy.get('[name="Accounting Software"]').select('Quickbooks Online');
  cy.get('[name="Country"]').select('United States');
  cy.get('[name="State"]').type('California');
  cy.get('[name="City"]').type('San Diego');
  cy.get('[name="Currency"]').select('USD');
  cy.get('input[type="checkbox"]').check();
  cy.contains('span', 'Next').click();
};

export default fillCompanyInfo;
