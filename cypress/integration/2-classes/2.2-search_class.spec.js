/// <reference types="cypress" />
import DetailLogin from "../../support/pages/detailLogin";
import DetailClasses from "../../support/pages/detailClasses";

describe('Classes', () => {
    it("Search Class", () => {
        DetailLogin.Login()
        DetailClasses.clickClassesLink()
        DetailClasses.validSearchClass()
        DetailClasses.typeNameSearchClass('TRITÃO')
        DetailClasses.clickSearchClass()
        DetailClasses.validRegisteredClass()
        DetailClasses.validNameSearchClass()
    })        
})