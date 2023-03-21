/// <reference types="cypress" />
import DetailLogin from "../support/pages/detailLogin";

describe('Login', () => {
    it("Login and Password", () => {
        DetailLogin.visitLoginURL()
        DetailLogin.typeEmailLogin()
        DetailLogin.typePasswordLogin()
        DetailLogin.clickButtonLogin()
    })        
})

