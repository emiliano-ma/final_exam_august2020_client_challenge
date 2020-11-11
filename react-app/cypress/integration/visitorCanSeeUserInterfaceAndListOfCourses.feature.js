describe("Visitor can see user interface", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Vistior can see header", () => {
    cy.get('[data-cy="main-header"]').should("contain", "Course list");
  });

  it("displays course with category workshops", () => {
    cy.get('[data-cy="course-workshops"]').within(() => {
      cy.get('[data-cy="title"]').should("contain", "Work The Web");
      cy.get('[data-cy="category"]').should("contain", "workshops");
    });
  });

  it("displays course with category testing", () => {
    cy.get('[data-cy="course-testing"]').within(() => {
      cy.get('[data-cy="title"]').should(
        "contain",
        "Test Automation using Cypress"
      );
      cy.get('[data-cy="category"]').should("contain", "testing");
    });
  });
});
