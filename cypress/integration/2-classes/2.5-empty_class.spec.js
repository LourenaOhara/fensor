/// <reference types="cypress" />
import DetailLogin from "../../support/pages/detailLogin";
import DetailClasses from "../../support/pages/detailClasses";

describe('Classes', () => {
    it("Class Not Found", () => {
        DetailLogin.Login()
        DetailClasses.clickClassesLink()
        DetailClasses.validSearchClass()
        DetailClasses.typeNameSearchClass('TURMA NOVA')
        DetailClasses.clickSearchClass()
        DetailClasses.validNoneClass()
    })        
})