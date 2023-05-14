Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should correctly add numbers", () => {
    cy.get("#1").click();
    cy.get("#button-plus").click();
    cy.get("#2").click();
    cy.get("#button-equals").click();
    cy.get("#calc-view").should("have.value", "3");
  });

  it("should correctly subtract numbers", () => {
    cy.get("#3").click();
    cy.get("#button-minus").click();
    cy.get("#1").click();
    cy.get("#button-equals").click();
    cy.get("#calc-view").should("have.value", "2");
  });

  it("should correctly multiply numbers", () => {
    cy.get("#2").click();
    cy.get("#button-multiply").click();
    cy.get("#3").click();
    cy.get("#button-equals").click();
    cy.get("#calc-view").should("have.value", "6");
  });

  it("should correctly divide numbers", () => {
    cy.get("#9").click();
    cy.get("#button-divide").click();
    cy.get("#3").click();
    cy.get("#button-equals").click();
    cy.get("#calc-view").should("have.value", "3");
  });

  it("should correctly clear input", () => {
    cy.get("#9").click();
    cy.get("#c").click();
    cy.get("#calc-view").should("have.value", "");
  });

  it("should correctly delete last input", () => {
    cy.get("#9").click();
    cy.get("#9").click();
    cy.get("#del").click();
    cy.get("#calc-view").should("have.value", "9");
  });
});
