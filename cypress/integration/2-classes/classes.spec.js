/// <reference types="cypress" />
import DetailLogin from "../../support/pages/detailLogin";
import DetailClasses from "../../support/pages/detailClasses";

describe('Classes', () => {
    it("Register Class", () => {
        DetailLogin.visitLoginURL()
        DetailLogin.typeEmailLogin()
        DetailLogin.typePasswordLogin()
        DetailLogin.clickButtonLogin()
        DetailLogin.clickButtonList()
        DetailClasses.clickClassesLink()
        DetailClasses.clickButtonAddClass()
    })        
})


