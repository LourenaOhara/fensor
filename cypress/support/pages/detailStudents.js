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
    
    static typeDueDate(dueDate){
        cy.xpath(detailStudentsElements.inputDueDate).type(dueDate)
    }
    
    static typeCodeStudent(codeStudent){
        cy.xpath(detailStudentsElements.labelStudentCode).should('be.visible')
        cy.xpath(detailStudentsElements.inputStudentCode).type(codeStudent)
    }

    static clickBiologicSex(biologicSex){
        cy.xpath(detailStudentsElements.labelBiologicSex).should('be.visible')
        cy.xpath(detailStudentsElements.selectBiologicSex).select(biologicSex)
    }

    static typeCEPStudent(cepStudent){
        cy.xpath(detailStudentsElements.inputCEP).should('be.visible')
        cy.xpath(detailStudentsElements.inputCEP).type(cepStudent)
        cy.wait(1000)
    }

    static typeMotherName(motherName){
        cy.xpath(detailStudentsElements.labelMotherName).should('be.visible')
        cy.xpath(detailStudentsElements.inputMotherName).type(motherName)
    }

    static typeCPFMother(motherCPF){
        cy.xpath(detailStudentsElements.labelCPFMother).should('be.visible')
        cy.xpath(detailStudentsElements.inputCPFMother).type(motherCPF)
    }

    static typeCelMother(motherCel){
        cy.xpath(detailStudentsElements.labelCelMother).should('be.visible')
        cy.xpath(detailStudentsElements.inputCelMother).type(motherCel)
    }

    static typeDaddyName(daddyName){
        cy.xpath(detailStudentsElements.labelDaddyName).should('be.visible')
        cy.xpath(detailStudentsElements.inputDaddyName).type(daddyName)
    }

    static typeDaddyCPF(daddyCPF){
        cy.xpath(detailStudentsElements.labelCPFDaddy).should('be.visible')
        cy.xpath(detailStudentsElements.inputCPFDaddy).type(daddyCPF)
    }

    static typeDaddyCel(daddyCel){
        cy.xpath(detailStudentsElements.labelCelDaddy).should('be.visible')
        cy.xpath(detailStudentsElements.inputCelDaddy).type(daddyCel)
    }

    static typeFinalcialName(financialName){
        cy.xpath(detailStudentsElements.labelNameFinancial).should('be.visible')
        cy.xpath(detailStudentsElements.inputNameFinancial).type(financialName)
    }

    static typeFinalcialEmail(financialEmail){
        cy.xpath(detailStudentsElements.labelEmailFinancial).should('be.visible')
        cy.xpath(detailStudentsElements.inputEmailFinancial).type(financialEmail)
    }

    static typeFinalcialRG(financialRG){
        cy.xpath(detailStudentsElements.labelRGFinancial).should('be.visible')
        cy.xpath(detailStudentsElements.inputRGFinancial).type(financialRG)
    }

    static typeFinalcialCPF(financialCPF){
        cy.xpath(detailStudentsElements.labelCPFFinancial).should('be.visible')
        cy.xpath(detailStudentsElements.inputCPFFinancial).type(financialCPF)
    }

    static clickKinshipStudent(kinshipStudent){
        cy.xpath(detailStudentsElements.labelKinship).should('be.visible')
        cy.xpath(detailStudentsElements.selectKinship).select(kinshipStudent)
    }

    static typeFinalcialCEL(financialCEL){
        cy.xpath(detailStudentsElements.labelCelFinancial).should('be.visible')
        cy.xpath(detailStudentsElements.inputCelFinancial).type(financialCEL)
    }

    static typeDescription(description){
        cy.xpath(detailStudentsElements.labelDescription).should('be.visible')
        cy.xpath(detailStudentsElements.inputDescription).type(description)
    }

    static validSearchTitle(){
        cy.xpath(detailStudentsElements.divCardHeader).should('be.visible')
    }

    static typeSearchNameStudent(nameSearch){
        cy.xpath(detailStudentsElements.labelSearchNameStudent).should('be.visible')
        cy.xpath(detailStudentsElements.inputSearchNameStudent).type(nameSearch)
    }

    static clickButtonSearchStudent(){
        cy.xpath(detailStudentsElements.buttonSearchStudent).should('be.visible')
        cy.xpath(detailStudentsElements.buttonSearchStudent).click()
    }

    static validStudentCard(){
        cy.xpath(detailStudentsElements.divStudentSearch).scrollIntoView().should('be.visible')
        cy.xpath(detailStudentsElements.divContentCardStudent).should('be.visible')
    }

    static invalidStudentCard(){
        cy.xpath(detailStudentsElements.divStudentSearch).scrollIntoView().should('be.visible')
        cy.xpath(detailStudentsElements.divContentCardStudent).should('not.exist')
    }

    static validStudentCardName(nameStudent){
        cy.xpath(detailStudentsElements.divDetailsNameStudent).contains(nameStudent)
    }

    static clickEditStudent(){
        cy.xpath(detailStudentsElements.spanEditStudent).scrollIntoView().should('be.visible')
        cy.xpath(detailStudentsElements.spanEditStudent).click()
    }

    static typeEditCellNumber(cell){
        cy.xpath(detailStudentsElements.inputCelStudent).clear()
        cy.xpath(detailStudentsElements.inputCelStudent).type(cell)
    }

    static clickBtnEditStudent(){
        cy.xpath(detailStudentsElements.buttonEditStudent).scrollIntoView().should('be.visible')
        cy.xpath(detailStudentsElements.buttonEditStudent).click()
    }
    
    static validModalSuccess(){
        cy.get(detailStudentsElements.modalSucess).scrollIntoView().should('be.visible')
    }

    static clickSeeStudent(){
        cy.xpath(detailStudentsElements.spanSeeStudent).scrollIntoView().should('be.visible')
        cy.xpath(detailStudentsElements.spanSeeStudent).click()
    }
    
    static validStudentNameProfile(name){
        cy.xpath(detailStudentsElements.seeStudentName).scrollIntoView().should('be.visible')
        cy.get('h2').should('contain',name)
    }

    static validStudentsInformations(){
        cy.xpath(detailStudentsElements.divTimeSchool).scrollIntoView().should('be.visible')
        cy.xpath(detailStudentsElements.divNumberClasses).scrollIntoView().should('be.visible')
        cy.xpath(detailStudentsElements.divNumberAbsences).scrollIntoView().should('be.visible')
        cy.xpath(detailStudentsElements.divStudentsInformations).scrollIntoView().should('be.visible')
        cy.xpath(detailStudentsElements.divFinancialResponsible).scrollIntoView().should('be.visible')
        cy.xpath(detailStudentsElements.divClasses).scrollIntoView().should('be.visible')
        cy.xpath(detailStudentsElements.divAbout).scrollIntoView().should('be.visible')
        cy.xpath(detailStudentsElements.divFinancial).scrollIntoView().should('be.visible')
        cy.xpath(detailStudentsElements.divStudentFrquency).scrollIntoView().should('be.visible')
    }

    //usado somente no teste de frequência
    static validStudentsFrequencyInformation(){
        cy.xpath(detailStudentsElements.divStudentFrquency).scrollIntoView().should('be.visible')
    }

    static clickDocStudent(){
        cy.xpath(detailStudentsElements.spanDocStudents).scrollIntoView().should('be.visible')
        cy.xpath(detailStudentsElements.spanDocStudents).click()
    }

    static validDocTitle(){
        cy.xpath(detailStudentsElements.divDocTitle).should('be.visible')
    }
    
    static clickDocType(docType){
        cy.xpath(detailStudentsElements.labelDocType).should('be.visible')
        cy.xpath(detailStudentsElements.selectDocType).select(docType)
    }

    static clickCloseDoc(){
        cy.xpath(detailStudentsElements.divCloseModal).should('be.visible')
        cy.xpath(detailStudentsElements.divCloseModal).click()
    }
    
    static clickAnamnesisStudent(){
        cy.xpath(detailStudentsElements.spanAnamnesis).scrollIntoView().should('be.visible')
        cy.xpath(detailStudentsElements.spanAnamnesis).click()
    }

    static validAnamnesisTitle(){
        cy.xpath(detailStudentsElements.labelAnamnesisForm).should('be.visible')
    }

    static validAnamnesisName(){
        cy.xpath(detailStudentsElements.labelAnamnesisName).should('be.visible')
    }

    static typeAnamnesisWeight(anamnesisWeight){
        cy.xpath(detailStudentsElements.labelAnamnesisWeight).should('be.visible')
        cy.xpath(detailStudentsElements.inputAnamnesisWeight).type(anamnesisWeight)
    }

    static typeAnamnesisHeight(anamnesisHeight){
        cy.xpath(detailStudentsElements.labelAnamnesisHeight).should('be.visible')
        cy.xpath(detailStudentsElements.inputAnamnesisHeight).type(anamnesisHeight)
    }

    static typeAnamnesisAge(){
        cy.xpath(detailStudentsElements.labelAnamnesisAge).should('be.visible')
    }

    static typeAnamnesisIMC(anamnesisIMC){
        cy.xpath(detailStudentsElements.labelAnamnesisIMC).should('be.visible')
        cy.get(detailStudentsElements.inputAnamnesisIMC).type(anamnesisIMC)
    }

    static selectAnamnesisSmoke(anamnesisSmoke){
        cy.xpath(detailStudentsElements.labelAnamnesisSmoke).should('be.visible')
        cy.xpath(detailStudentsElements.selectAnamnesisSmoke).select(anamnesisSmoke)
    }

    static typeAnamnesisSmokeTime(){
        cy.xpath(detailStudentsElements.labelAnamnesisSmokeTime).should('be.visible')
        //cy.xpath(detailStudentsElements.inputAnamnesisSmokeTime).type(anamnesisSmokeTime)
    }

    static clickTableCancerOption(){
        cy.xpath(detailStudentsElements.tableInputCancerOption).should('be.visible')
        cy.xpath(detailStudentsElements.tableInputCancerOption).click()
    }

    static addSurgeriesPerformed(especification, howLong){
        cy.xpath(detailStudentsElements.labelSurgeriesPerformed).scrollIntoView().should('be.visible')
        cy.get(detailStudentsElements.addSurgeriesPerformed).click({ force: true })
        cy.xpath(detailStudentsElements.inputEspecification).type(especification)
        cy.xpath(detailStudentsElements.inputHowLong).type(howLong)
    }

    static addTreatment(treatment, doctorName){
        cy.xpath(detailStudentsElements.labelTreatment).scrollIntoView().should('be.visible')
        cy.get(detailStudentsElements.addTreatment).click({ force: true })
        cy.xpath(detailStudentsElements.inputTreatment).type(treatment)
        cy.xpath(detailStudentsElements.inputDoctorName).type(doctorName)
    }

    static typeAnamnesisObservations(observations){
        cy.xpath(detailStudentsElements.labelObservations).should('be.visible')
        cy.xpath(detailStudentsElements.inputObservations).type(observations)
    }

    static validButtonsForm(){
        cy.xpath(detailStudentsElements.buttonSaveForm).should('be.visible')
        cy.xpath(detailStudentsElements.buttonPrintForm).should('be.visible')
    }
}

export default DetailStudents