/// <reference types="cypress" />
import DetailLogin from "../../support/pages/detailLogin";
import DetailsFrequencies from "../../support/pages/detailsFrequencies";
import DetailClasses from "../../support/pages/detailClasses";
import DetailStudents from "../../support/pages/detailStudents";

describe('Frequencies', () => {
    it("Add Frequency", () => {
        DetailLogin.Login()
        DetailClasses.clickClassesLink()
        DetailsFrequencies.validFrequeciesStudentTitle()
        DetailsFrequencies.clickButtonGoToFrequency()
        DetailsFrequencies.validFrequecyTitle()
        DetailsFrequencies.clickFrequencyWeekDay('Terça-feira')
        DetailsFrequencies.typeFrequencyClassName('Chinelo de Trave Futebol Clube')
        DetailsFrequencies.clickButtonFrequencySearch()
        DetailsFrequencies.validFrequencyClassesTitle()
        DetailsFrequencies.clickClassFrequency('Chinelo de Trave Futebol Clube', 'Ter, Qui')
        DetailsFrequencies.validStudentsFrequencyTitle()
        DetailsFrequencies.clickButtonMakeCall()
        DetailsFrequencies.clickButtonSearchStudents()
        DetailsFrequencies.clickButtonMarkAll()
        DetailsFrequencies.clickButtonConfirmCall()
    })

    it("Add Frequency - A single student", () => {
        DetailLogin.Login()
        DetailClasses.clickClassesLink()
        DetailsFrequencies.validFrequeciesStudentTitle()
        DetailsFrequencies.clickButtonGoToFrequency()
        DetailsFrequencies.validFrequecyTitle()
        DetailsFrequencies.clickFrequencyWeekDay('Terça-feira')
        DetailsFrequencies.typeFrequencyClassName('Chinelo de Trave Futebol Clube')
        DetailsFrequencies.clickButtonFrequencySearch()
        DetailsFrequencies.validFrequencyClassesTitle()
        DetailsFrequencies.clickClassFrequency('Chinelo de Trave Futebol Clube', 'Ter, Qui')
        DetailsFrequencies.validStudentsFrequencyTitle()
        DetailsFrequencies.clickButtonMakeCall()
        DetailsFrequencies.typeSearchStudentClass('João Fernando Seixas')
        DetailsFrequencies.clickButtonSearchStudents()
        DetailsFrequencies.clickButtonMarkAll()
        DetailsFrequencies.clickButtonConfirmCall()
    })

    it("Add Frequency - Empty class", () => {
        DetailLogin.Login()
        DetailClasses.clickClassesLink()
        DetailsFrequencies.validFrequeciesStudentTitle()
        DetailsFrequencies.clickButtonGoToFrequency()
        DetailsFrequencies.validFrequecyTitle()
        DetailsFrequencies.clickFrequencyWeekDay('Sábado')
        DetailsFrequencies.typeFrequencyClassName('Tritão Grupo de Nado')
        DetailsFrequencies.clickButtonFrequencySearch()
        DetailsFrequencies.validFrequencyClassesTitle()
        DetailsFrequencies.validEmptyFrequencyClass()
    })

    it("Add Frequency - See frequency", () => {
        DetailLogin.Login()
        DetailStudents.clickStudentsLink()
        DetailStudents.clickSeeStudent()
        DetailStudents.validStudentNameProfile('João Fernando Seixas')
        DetailStudents.validStudentsFrequencyInformation()
    })
})