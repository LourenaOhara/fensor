import detailFrequenciesElements from "../elements/elementsFrequencies";

class DetailsFrequencies {

    static validFrequeciesStudentTitle(){
        cy.xpath(detailFrequenciesElements.divFrequenciesStudentTitle).scrollIntoView().should('be.visible')
    }

    static clickButtonGoToFrequency(){
        cy.xpath(detailFrequenciesElements.buttonGoToFrequency).should('be.visible')
        cy.xpath(detailFrequenciesElements.buttonGoToFrequency).click()
    }
    
    static validFrequecyTitle(){
        cy.xpath(detailFrequenciesElements.divFrequencyTitle).should('be.visible')
    }

    static clickFrequencyWeekDay(weekDay){
        cy.xpath(detailFrequenciesElements.selectWeekDay).select(weekDay)
    }

    static typeFrequencyClassName(className){
        cy.xpath(detailFrequenciesElements.labelClassName).should('be.visible')
        cy.xpath(detailFrequenciesElements.labelClassName).type(className)
    }

    static clickButtonFrequencySearch(){
        cy.xpath(detailFrequenciesElements.buttonFrequencySearch).should('be.visible')
        cy.xpath(detailFrequenciesElements.buttonFrequencySearch).click()
    }

    static validFrequencyClassesTitle(){
        cy.xpath(detailFrequenciesElements.divFrequencyClassesTitle).should('be.visible')
    }

    static clickClassFrequency(className, weekDay){
        cy.xpath(detailFrequenciesElements.divClassFrequency).should('be.visible')
        cy.xpath(detailFrequenciesElements.divClassFrequency).contains(className)
        cy.xpath(detailFrequenciesElements.divClassFrequency).contains(weekDay)
        cy.xpath(detailFrequenciesElements.divClassFrequency).click()
    }

    static validStudentsFrequencyTitle(){
        cy.xpath(detailFrequenciesElements.divStudentsFrequencyTitle).should('be.visible')
    }

    static clickButtonMakeCall(){
        cy.xpath(detailFrequenciesElements.buttonMakeCall).should('be.visible')
        cy.xpath(detailFrequenciesElements.buttonMakeCall).click()
    }

    static clickButtonSearchStudents(){
        cy.xpath(detailFrequenciesElements.buttonSearchStudents).should('be.visible')
        cy.xpath(detailFrequenciesElements.buttonSearchStudents).click()
    }

    static clickButtonMarkAll(){
        cy.xpath(detailFrequenciesElements.buttonMarkAll).should('be.visible')
        cy.xpath(detailFrequenciesElements.buttonMarkAll).click()
    }
    
    static clickButtonConfirmCall(){
        cy.xpath(detailFrequenciesElements.buttonConfirm).should('be.visible')
        cy.xpath(detailFrequenciesElements.buttonConfirm).click()
    }
    
    static typeSearchStudentClass(studentSearch){
        cy.xpath(detailFrequenciesElements.labelSearchStudentClass).should('be.visible')
        cy.xpath(detailFrequenciesElements.labelSearchStudentClass).type(studentSearch)
    }

    static validEmptyFrequencyClass(){
        cy.xpath(detailFrequenciesElements.divEmptyFrequencyClass).should('be.visible')
    }
    

}

export default DetailsFrequencies
