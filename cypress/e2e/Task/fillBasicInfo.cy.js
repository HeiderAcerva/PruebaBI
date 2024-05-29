const fillBasicInfo = () => {
  cy.get('[name="FirstName"]').type('John');
  cy.get('[name="LastName"]').type('Doe');
  cy.get('[name="Email"]').type('john.doe@example.com');
  cy.get('[name="Bussines Phone Number"]').type('1234567890');
  cy.contains('span', 'Next').click();
};

export default fillBasicInfo;