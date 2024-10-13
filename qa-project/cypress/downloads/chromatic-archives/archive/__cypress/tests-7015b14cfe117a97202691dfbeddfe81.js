/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./cypress/e2e/Login.cy.js ***!
  \*********************************/


/* ==== Test Created with Cypress Studio ==== */
it("Login", function () {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit("localhost:3000");
  cy.get(".relative > span").click();
  cy.get(".relative > span").click();
  cy.screenshot();
  cy.get(".m-8 > :nth-child(1) > .group > .h-full").clear("b");
  cy.get(".m-8 > :nth-child(1) > .group > .h-full").type("test@example.com");
  cy.get(".gradient.absolute.inset-0.opacity-50").trigger("pointerup");
  cy.screenshot();
  cy.get(".gradient.absolute.inset-0.opacity-50").trigger("pointerup");
  cy.get(":nth-child(4) > .group > .h-full").clear("te");
  cy.get(":nth-child(4) > .group > .h-full").type("test@123");
  cy.screenshot();
  cy.get(".opacity-70 > .gradient").click();
  cy.screenshot();
  cy.get(".relative > span").click();

  // cy.get(".relative > span").click();
  /* ==== End Cypress Studio ==== */
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW4uY3kuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBQSxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVk7RUFDdEI7RUFDQUMsRUFBRSxDQUFDQyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7RUFDMUJELEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDO0VBQ2xDSCxFQUFFLENBQUNFLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDQyxLQUFLLENBQUMsQ0FBQztFQUNsQ0gsRUFBRSxDQUFDSSxVQUFVLENBQUMsQ0FBQztFQUNmSixFQUFFLENBQUNFLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDRyxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQzVETCxFQUFFLENBQUNFLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDSSxJQUFJLENBQUMsa0JBQWtCLENBQUM7RUFDMUVOLEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUNLLE9BQU8sQ0FBQyxXQUFXLENBQUM7RUFDcEVQLEVBQUUsQ0FBQ0ksVUFBVSxDQUFDLENBQUM7RUFDZkosRUFBRSxDQUFDRSxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQ0ssT0FBTyxDQUFDLFdBQVcsQ0FBQztFQUNwRVAsRUFBRSxDQUFDRSxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQ0csS0FBSyxDQUFDLElBQUksQ0FBQztFQUN0REwsRUFBRSxDQUFDRSxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQztFQUMzRE4sRUFBRSxDQUFDSSxVQUFVLENBQUMsQ0FBQztFQUNmSixFQUFFLENBQUNFLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDQyxLQUFLLENBQUMsQ0FBQztFQUN6Q0gsRUFBRSxDQUFDSSxVQUFVLENBQUMsQ0FBQztFQUNmSixFQUFFLENBQUNFLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDQyxLQUFLLENBQUMsQ0FBQzs7RUFFbEM7RUFDQTtBQUNGLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnV4dC1hcHAvLi9jeXByZXNzL2UyZS9Mb2dpbi5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09IFRlc3QgQ3JlYXRlZCB3aXRoIEN5cHJlc3MgU3R1ZGlvID09PT0gKi9cbml0KFwiTG9naW5cIiwgZnVuY3Rpb24gKCkge1xuICAvKiA9PT09IEdlbmVyYXRlZCB3aXRoIEN5cHJlc3MgU3R1ZGlvID09PT0gKi9cbiAgY3kudmlzaXQoXCJsb2NhbGhvc3Q6MzAwMFwiKTtcbiAgY3kuZ2V0KFwiLnJlbGF0aXZlID4gc3BhblwiKS5jbGljaygpO1xuICBjeS5nZXQoXCIucmVsYXRpdmUgPiBzcGFuXCIpLmNsaWNrKCk7XG4gIGN5LnNjcmVlbnNob3QoKTtcbiAgY3kuZ2V0KFwiLm0tOCA+IDpudGgtY2hpbGQoMSkgPiAuZ3JvdXAgPiAuaC1mdWxsXCIpLmNsZWFyKFwiYlwiKTtcbiAgY3kuZ2V0KFwiLm0tOCA+IDpudGgtY2hpbGQoMSkgPiAuZ3JvdXAgPiAuaC1mdWxsXCIpLnR5cGUoXCJ0ZXN0QGV4YW1wbGUuY29tXCIpO1xuICBjeS5nZXQoXCIuZ3JhZGllbnQuYWJzb2x1dGUuaW5zZXQtMC5vcGFjaXR5LTUwXCIpLnRyaWdnZXIoXCJwb2ludGVydXBcIik7XG4gIGN5LnNjcmVlbnNob3QoKTtcbiAgY3kuZ2V0KFwiLmdyYWRpZW50LmFic29sdXRlLmluc2V0LTAub3BhY2l0eS01MFwiKS50cmlnZ2VyKFwicG9pbnRlcnVwXCIpO1xuICBjeS5nZXQoXCI6bnRoLWNoaWxkKDQpID4gLmdyb3VwID4gLmgtZnVsbFwiKS5jbGVhcihcInRlXCIpO1xuICBjeS5nZXQoXCI6bnRoLWNoaWxkKDQpID4gLmdyb3VwID4gLmgtZnVsbFwiKS50eXBlKFwidGVzdEAxMjNcIik7XG4gIGN5LnNjcmVlbnNob3QoKTtcbiAgY3kuZ2V0KFwiLm9wYWNpdHktNzAgPiAuZ3JhZGllbnRcIikuY2xpY2soKTtcbiAgY3kuc2NyZWVuc2hvdCgpO1xuICBjeS5nZXQoXCIucmVsYXRpdmUgPiBzcGFuXCIpLmNsaWNrKCk7XG5cbiAgLy8gY3kuZ2V0KFwiLnJlbGF0aXZlID4gc3BhblwiKS5jbGljaygpO1xuICAvKiA9PT09IEVuZCBDeXByZXNzIFN0dWRpbyA9PT09ICovXG59KTtcbiJdLCJuYW1lcyI6WyJpdCIsImN5IiwidmlzaXQiLCJnZXQiLCJjbGljayIsInNjcmVlbnNob3QiLCJjbGVhciIsInR5cGUiLCJ0cmlnZ2VyIl0sInNvdXJjZVJvb3QiOiIifQ==