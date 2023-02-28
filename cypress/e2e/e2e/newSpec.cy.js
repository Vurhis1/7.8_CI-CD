it("Main title in halls management", () => {
    cy.visit("/admin");
    cy.login("qamid@qamid.ru", "qamid");
    cy.get("h2").should("be.visible");
  });