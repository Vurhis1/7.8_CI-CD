it("Main title in authorization", () => {
    cy.visit("/admin");
    cy.get(".login__title").should("be.visible");
  });