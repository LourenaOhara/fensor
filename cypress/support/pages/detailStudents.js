import detailStudentsElements from "../elements/elementsStudents";

class DetailStudents {
    
    static clickStudentsLink(){
        cy.xpath(detailStudentsElements.linkStudents).click()
    }

    static clickButtonAddStudent(){
        cy.xpath(detailStudentsElements.buttonAddStudent).click()
    }

    static validTextAddStudent(){
        cy.xpath(detailStudentsElements.divAddStudent).should('be.visible') 
    }

    static typeNameStudent(nameStudent){
        cy.get(detailStudentsElements.inputNameStudent).should('be.visible')
        cy.get(detailStudentsElements.inputNameStudent).type(nameStudent)
    }

    static typeRGStudent(rgStudent){
        cy.xpath(detailStudentsElements.inputRGStudent).should('be.visible')
        cy.xpath(detailStudentsElements.inputRGStudent).type(rgStudent)
    }

    static typeCPFStudent(cpfStudent){
        cy.xpath(detailStudentsElements.inputCPFStudent).should('be.visible')
        cy.xpath(detailStudentsElements.inputCPFStudent).type(cpfStudent)
    }

    static typeBirthStudent(birthStudent){
        cy.xpath(detailStudentsElements.inputBirthStudent).should('be.visible')
        cy.xpath(detailStudentsElements.inputBirthStudent).type(birthStudent)
    }

    static typeCellStudent(cellStudent){
        cy.xpath(detailStudentsElements.inputCelStudent).should('be.visible')
        cy.xpath(detailStudentsElements.inputCelStudent).type(cellStudent)
    }

    static clickTypeStudent(typeStudent){
        cy.xpath(detailStudentsElements.selectTypeStudent).should('be.visible')
        cy.xpath(detailStudentsElements.selectTypeStudent).select(typeStudent)
    }

    static clickStatusStudent(statusStudent){
        cy.xpath(detailStudentsElements.selectStatusStudent).should('be.visible')
        cy.xpath(detailStudentsElements.selectStatusStudent).select(statusStudent)
    }

    static clickSportStudent(sportStudent){
        cy.xpath(detailStudentsElements.selectSport).should('be.visible')
        cy.xpath(detailStudentsElements.selectSport).select(sportStudent)
    }

    static typeSchoolYear(schoolYear){
        cy.get(detailStudentsElements.inputSchoolYear).should('be.visible')
        cy.get(detailStudentsElements.inputSchoolYear).type(schoolYear)
    }

    static typePosition(positionStudent){
        cy.xpath(detailStudentsElements.selectPosition).should('be.visible')
        cy.xpath(detailStudentsElements.selectPosition).select(positionStudent)
    }

    static typeCTStudent(ctStudent){
        cy.xpath(detailStudentsElements.selectCT).should('be.visible')
        cy.xpath(detailStudentsElements.selectCT).select(ctStudent)
    }

    static typeSkill(skillStudent){
        cy.xpath(detailStudentsElements.selectSkill).should('be.visible')
        cy.xpath(detailStudentsElements.selectSkill).select(skillStudent)
    }

    static typeSublevel(sublevelStudent){
        cy.xpath(detailStudentsElements.selectSublevel).should('be.visible')
        cy.xpath(detailStudentsElements.selectSublevel).select(sublevelStudent)
    }

    static typeEmailStudent(emailStudent){
        cy.xpath(detailStudentsElements.inputEmail).should('be.visible')
        cy.xpath(detailStudentsElements.inputEmail).type(emailStudent)
    }

    static typeMeetSchool(meetSchool){
        cy.xpath(detailStudentsElements.selectMeetSchool).should('be.visible')
        cy.xpath(detailStudentsElements.selectMeetSchool).select(meetSchool)
    }

    static typeLateralityStudent(lateralityStudent){
        cy.xpath(detailStudentsElements.selectLaterality).should('be.visible')
        cy.xpath(detailStudentsElements.selectLaterality).select(lateralityStudent)
    }

    static clickTrainingSchedule(){
        cy.xpath(detailStudentsElements.labelTrainingSchedule).should('be.visible')
        cy.xpath(detailStudentsElements.selectTrainingSchedule).click()
    }
    
    
    

}

export default DetailStudents