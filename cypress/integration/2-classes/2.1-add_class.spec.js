/// <reference types="cypress" />
import DetailLogin from "../../support/pages/detailLogin";
import DetailClasses from "../../support/pages/detailClasses";

describe('Classes', () => {
    it("Register Class", () => {
        DetailLogin.Login()
        DetailClasses.clickClassesLink()
        DetailClasses.clickButtonAddClass()
        DetailClasses.validTextAddClass()
        DetailClasses.typeNameClass('Nadando Contra Maré')
        DetailClasses.clickStatusClass('Ativo')
        DetailClasses.clickWeekDay('Sexta-feira')
        DetailClasses.clickHourDay('11:00')
        DetailClasses.clickAddStudent('Pedro Alcantara Andrade')
        DetailClasses.clickAddWorker('Lourena')
        DetailClasses.clickAge('2008')
        DetailClasses.typeClassWeek('2')
        DetailClasses.typeRateForgetCard('25')
        DetailClasses.typeRateCard('8')
    })        
})


