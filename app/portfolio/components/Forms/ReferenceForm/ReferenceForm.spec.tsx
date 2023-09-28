export {}
// import * as React from "react";
// import { mount } from "@cypress/react";
// import ReferenceForm from "./ReferenceForm";
// // import chaiColors from 'chai-colors'
// // import chai from 'chai'

// // chai.use(chaiColors)

// /* eslint-disable no-undef */
// /* eslint-disable no-unused-vars */
// /* eslint-disable testing-library/prefer-screen-queries */
// // /* eslint-disable no-redeclare */

// // /*global cy before*/
// describe("form renders correctly", () => {
//   beforeEach(() => {
//     mount(<ReferenceForm />);
//   });
//   it("form should be visible", () => {
//     cy.get('[test-id="__reference-form"]').should("be.visible");
//   });

//   it("form should contain 4 input fields", () => {
//     cy.get('[test-id="__reference-form"]')
//       .find("input")
//       .should("have.length", 8);
//   });

//   it("should have only 1 employer", () => {
//     /* should start with one employer */
//     cy.get("[test-id='__employer--0']").should("exist");

//     cy.get("[test-id='__employer--1']").should("not.exist");
//   });
// });

// describe("form behaves correctly", () => {
//   beforeEach(() => {
//     mount(<ReferenceForm />);
//   });
//   it("fields are required", () => {
//     cy.get('[test-id="__reference-form"]').find("form").submit();
//     cy.get("__success").should("not.exist");
//   });

//   it("form submits data", () => {
//     let [
//       firstName,
//       lastName,
//       address,
//       employerName,
//       startDate,
//       endDate,
//       guarantorName,
//       guarantorAddress,
//       // guarantorRelationship,
//     ] = [
//       "test_firstName",
//       "test_lastName",
//       "test_address",
//       "test_employerName",
//       "2022-06-13",
//       "2022-06-14",
//       "test_guarantorName",
//       "test_guarantorAddress",
//       "test_guarantorRelationship",
//     ];

//     /* PERSONAL */
//     cy.get("[test-id='__reference-form--personal__first-name']")
//       .type(firstName)
//       .should("exist");

//     cy.get("[test-id='__reference-form--personal__last-name']")
//       .type(lastName)
//       .should("exist");

//     cy.get("[test-id='__reference-form--personal__address']")
//       .type(address)
//       .should("exist");

//     /* EMPLOYERS */
//     cy.get("[test-id='__employer--0']")
//       .find("input[type='text']")
//       .type(employerName)
//       .should("exist");

//     cy.get("[test-id='__employment-start-date']")
//       .type(startDate)
//       .should("exist");

//     cy.get("[test-id='__employment-end-date']")
//       .type(endDate)
//       .should("exist");

//     /* GUARANTOR */
//     cy.get("[test-id='__guarantor_name']")
//       .type(guarantorName)
//       .should("exist");

//     cy.get("[test-id='__guarantor_address']")
//       .type(guarantorAddress)
//       .should("exist");

//     cy.get("[test-id='__custom-select--control']")
//       .should("exist")
//       .click(); // opens options list

//     cy.get("[test-id='__custom-select--options-list']")
//       .should("be.visible")
//       .should("have.length", 1);

//     cy.get(".custom-select--option")
//       .should("have.length", 4)
//       .each(($option) => {
//         cy.wrap($option).should("exist").should("have.css", "background-color");
//         // .and('be.colored', "rgb(228,234,241)")
//       });

//     cy.get("[test-id='__guarantor_relationship']")
//       .should("exist")
//       .should("have.text", "Please select an option");

//     /* select one option */
//     cy.get("[test-id='__option--1']")
//       .should("have.text", "Sibling")
//       .click();

//     /* option is selected */
//     cy.get("[test-id='__guarantor_relationship']").should(
//       "have.text",
//       "Sibling"
//     );

//     /* form submits correctly */
//     cy.get("[test-id='__reference-form--buttons__submitBtn']").click({
//       // force: true,
//     });

//     /* interc */
//     cy.intercept('post', 'https://ref-api.goodlord.co/reference/new')

//     cy.get("[test-id='__success']")
//       .should("be.not.visible")
//       .should("have.text", "all ok");
//   });

//   it("adds employers", () => {
//     cy.get("[test-id='__employer--0']").should("exist");
//     cy.get("[test-id='__employer--1']").should("not.exist");
//     cy.get("[test-id='__employer--2']").should("not.exist");

//     cy.get("[test-id='__add-employer']")
//       .click()
//       .click();

//     cy.get("[test-id='__employer--1']").should("exist");
//     cy.get("[test-id='__employer--2']").should("exist");
//   });

//   it("removes employers", () => {
//     cy.get("[test-id='__add-employer']")
//       .click()
//       .click();

//     cy.get("[test-id='__employer--0']").should("exist");
//     cy.get("[test-id='__employer--1']").should("exist");
//     cy.get("[test-id='__employer--2']").should("exist");

//     cy.get("[test-id='__employer--2']")
//       .find(".remove-employer")
//       .click();

//     cy.get("[test-id='__employer--2']").should("not.exist");
//   });
// });
