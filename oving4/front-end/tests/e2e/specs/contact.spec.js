Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
describe("Contact Form", () => {
  beforeEach(() => {
    cy.visit("/contact");
  });
  it("should display validation error messages", () => {
    // don't fill the form fields
    cy.get('button[type="submit"]').click();

    // check if the error messages are displayed
    cy.get(".error-name").should("be.visible");
    cy.get(".error-email").should("be.visible");
    cy.get(".error-message").should("be.visible");
  });

  it("should submit the form", () => {
    // setup mock server response
    cy.intercept("POST", "/submissions", {
      statusCode: 200,
      body: "it worked!",
    });

    cy.get("#name-field").type("Test User");
    cy.get("#mail-field").type("test@mail.com");
    cy.get("#message-field").type("This is a test message.");
    cy.get('button[type="submit"]').click();
    cy.contains("Contact form has been submitted! Thank you.");
  });

  it("should not submit the form when there is a network error", () => {
    // setup mock server response
    cy.intercept("POST", "/submissions", {
      statusCode: 500,
      body: "error",
    });

    cy.get("#name-field").type("Test User");
    cy.get("#mail-field").type("test@mail.com");
    cy.get("#message-field").type("This is a test message.");
    cy.get('button[type="submit"]').click();
    cy.contains(
      "The form was not sent due to a network error. Sorry for the inconvenience. Please try again later."
    );
  });
});
