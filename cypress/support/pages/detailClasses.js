import detailClassesElements from "../elements/elementsClasses";

class DetailClasses {

    static clickClassesLink(){
        cy.xpath(detailClassesElements.linkClasses).click()
    }

    static clickButtonAddClass(){
        cy.xpath(detailClassesElements.buttonAddClass).click()
    }

    static clickIncludeClass(){
        cy.xpath(detailClassesElements.buttonIncludeClass).should('be.visible')
        cy.xpath(detailClassesElements.buttonIncludeClass).click()
    }

    static validTextAddClass(){
        cy.xpath(detailClassesElements.divAddClass).should('be.visible') 
    }

    static typeNameClass(nameClass){
        cy.xpath(detailClassesElements.inputNameClass).type(nameClass)
    }

    static clickStatusClass(statusClass){
        cy.xpath(detailClassesElements.labelClassStatus).should('be.visible')
        cy.xpath(detailClassesElements.selectStatusClass).select(statusClass)
    }

    static clickWeekDay(weekDay){
        cy.xpath(detailClassesElements.labelWeekDay).should('be.visible')
        cy.get(detailClassesElements.selectWeekDay).select(weekDay)
    }

    static clickHourDay(hourDay){
        cy.xpath(detailClassesElements.labelHourDay).should('be.visible')
        cy.xpath(detailClassesElements.selectHourDay).select(hourDay)
    }

    static clickAddStudent(studentName){
        cy.xpath(detailClassesElements.labelAddStudent).should('be.visible')
        cy.xpath(detailClassesElements.selectAddStudent).select(studentName)
    }

    static clickAddWorker(workerName){
        cy.xpath(detailClassesElements.labelAddWorker).should('be.visible')
        cy.xpath(detailClassesElements.selectAddWorker).select(workerName)
    }

    static clickAge(age){
        cy.xpath(detailClassesElements.labelAge).should('be.visible')
        cy.xpath(detailClassesElements.selectAge).select(age)
    }

    static typeClassWeek(classWeek){
        cy.xpath(detailClassesElements.labelClassWeek).should('be.visible')
        cy.xpath(detailClassesElements.inputClassWeek).type(classWeek)
    }

    static typeRateForgetCard(forgetCard){
        cy.xpath(detailClassesElements.labelRateForgetCard).should('be.visible')
        cy.xpath(detailClassesElements.inputRateForgetCard).type(forgetCard)
    }

    static typeRateCard(rateCard){
        cy.xpath(detailClassesElements.labelRateCard).scrollIntoView().should('be.visible')
        cy.xpath(detailClassesElements.inputRateCard).clear().type(rateCard)
    }

    static validSearchClass(){
        cy.xpath(detailClassesElements.labelSearchClass).scrollIntoView().should('be.visible')
    }

    static typeNameSearchClass(nameSearchClass){
        cy.xpath(detailClassesElements.labelNameSearchClass).should('be.visible')
        cy.xpath(detailClassesElements.inputNameSearchClass).type(nameSearchClass)
    }

    static clickSearchClass(){
        cy.xpath(detailClassesElements.buttonSearchClass).should('be.visible')
        cy.xpath(detailClassesElements.buttonSearchClass).click()
    }

    static validRegisteredClass(){
        cy.xpath(detailClassesElements.labelRegisteredClass).scrollIntoView().should('be.visible')
    }
    
    static validNameSearchClass() {
        cy.xpath(detailClassesElements.divSearchClass).should('be.visible')
    }

    static clickButtonDivEditClass() {
        cy.xpath(detailClassesElements.buttonEditDivClass).should('be.visible')
        cy.xpath(detailClassesElements.buttonEditDivClass).click()
    }

    static clickButtonEditClass() {
        cy.xpath(detailClassesElements.buttonEditClass).should('be.visible')
        cy.xpath(detailClassesElements.buttonEditClass).click()
    }

    static validEditSuccess(){
        cy.xpath(detailClassesElements.divEditSuccess).scrollIntoView().should('be.visible')
    }

    static clickButtonDivSeeClass() {
        cy.xpath(detailClassesElements.buttonSeeDivClass).should('be.visible')
        cy.xpath(detailClassesElements.buttonSeeDivClass).click()
    }

    static validSeeClass(){
        cy.xpath(detailClassesElements.divSeeClassName).should('be.visible')
        cy.xpath(detailClassesElements.divSeeWorkers).should('be.visible')
        cy.xpath(detailClassesElements.divSeeStudents).should('be.visible')
    }

    static validNoneClass(){
        cy.xpath(detailClassesElements.labelRegisteredClass).should('be.visible')
        cy.xpath(detailClassesElements.divNoneClass).should('not.be.visible')
    }

    static validError(){
        cy.xpath(detailClassesElements.divAddClass).scrollIntoView().should('be.visible')
        cy.xpath(detailClassesElements.divError).should('be.visible')
        cy.get('strong').should('have.text','Atenção! ')
    }
}

export default DetailClasses