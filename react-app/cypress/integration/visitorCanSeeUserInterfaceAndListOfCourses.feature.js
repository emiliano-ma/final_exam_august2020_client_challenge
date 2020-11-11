describe("Visitor can see user interface", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Vistior can see header", () => {
    cy.get(".center").should("contain", "Course list");
  });

  it("displays course with category workshops", () => {
    cy.get("#course-workshops").within(() => {
      cy.get(".title").should("contain", "Work The Web");
      cy.get(".category").should("contain", "workshops");
    });
  });
});
