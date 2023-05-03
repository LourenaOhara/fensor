import detailContractsElements from "../elements/elementsContract";

class DetailsContracts {

    static clickContractsLink(){
        cy.xpath(detailContractsElements.linkContracts).click()
    }

    static clickButtonAddContract(){
        cy.xpath(detailContractsElements.buttonAddContract).should('be.visible')
        cy.xpath(detailContractsElements.buttonAddContract).click()
    }

    static validContractsTitle(){
        cy.xpath(detailContractsElements.divAddContractTitle).should('be.visible')
    }

    static clickContractsTeamAdd(teamContract){
        cy.xpath(detailContractsElements.labelAddTeamContract).should('be.visible')
        cy.xpath(detailContractsElements.selectAddTeamContract).select(teamContract)
    }

    static typeContractsStudentAdd(studentName){
        cy.xpath(detailContractsElements.labelAddStudentContract).should('be.visible')
        cy.xpath(detailContractsElements.inputAddStudentContract).type(studentName)
        cy.xpath(detailContractsElements.spanCloseStudentContract).click()
    }

    static clickContractsServiceAdd(serviceContract){
        cy.xpath(detailContractsElements.labelAddServiceContract).should('be.visible')
        cy.xpath(detailContractsElements.selectAddServiceContract).select(serviceContract)
    }

    static clickContractsBillingAdd(billingContract){
        cy.xpath(detailContractsElements.labelAddBillingContract).should('be.visible')
        cy.xpath(detailContractsElements.selectAddBillingContract).select(billingContract)
    }

    static clickContractsPaymentAdd(paymentContract){
        cy.xpath(detailContractsElements.labelAddPaymentContract).should('be.visible')
        cy.xpath(detailContractsElements.selectAddPaymentContract).select(paymentContract)
    }

    static clickContractsInsuranceAdd(){
        cy.xpath(detailContractsElements.labelAddInsuranceContract).should('be.visible')
        cy.xpath(detailContractsElements.selectAddInsuranceContract).select('PLAN_A')
    }

    static clickContractsDiscountTypeAdd(discountTypeContract){
        cy.xpath(detailContractsElements.labelAddDiscountTypeContract).should('be.visible')
        cy.xpath(detailContractsElements.selectAddDiscountTypeContract).select(discountTypeContract)
    }

    static typeContractsDiscountValueAdd(discountValueContract){
        cy.xpath(detailContractsElements.labelAddDiscountValueContract).should('be.visible')
        cy.xpath(detailContractsElements.inputAddDiscountValueContract).type(discountValueContract)
    }

    static typeEditContractsDiscountValueAdd(discountValueContract){
        cy.xpath(detailContractsElements.labelAddDiscountValueContract).scrollIntoView().should('be.visible')
        cy.xpath(detailContractsElements.inputAddDiscountValueContract).clear()
        cy.xpath(detailContractsElements.inputAddDiscountValueContract).type(discountValueContract)
    }

    static typeContractsMonthValueAdd(monthValueContract){
        cy.xpath(detailContractsElements.labelAddMonthValueContract).should('be.visible')
        cy.xpath(detailContractsElements.inputAddMonthValueContract).type(monthValueContract)
    }

    static typeEditContractsMonthValueAdd(monthValueContract){
        cy.xpath(detailContractsElements.labelAddMonthValueContract).scrollIntoView().should('be.visible')
        cy.xpath(detailContractsElements.inputAddMonthValueContract).clear()
        cy.xpath(detailContractsElements.inputAddMonthValueContract).type(monthValueContract)
    }

    static validContractsTotalValue(){
        cy.xpath(detailContractsElements.labelAddTotalValueContract).should('be.visible')
    }

    static clickContractsFeesTypeAdd(feesTypeContract){
        cy.xpath(detailContractsElements.labelAddFeesTypeContract).should('be.visible')
        cy.xpath(detailContractsElements.selectAddFeesTypeContract).select(feesTypeContract)
    }

    static typeContractsFeesValueAdd(feesValueContract){
        cy.xpath(detailContractsElements.labelAddFeesValueContract).should('be.visible')
        cy.xpath(detailContractsElements.inputAddFeesValueContract).type(feesValueContract)
    }

    static clickContractsPenaltyTypeAdd(penaltyTypeContract){
        cy.xpath(detailContractsElements.labelAddPenaltyTypeContract).should('be.visible')
        cy.xpath(detailContractsElements.selectAddPenaltyTypeContract).select(penaltyTypeContract)
    }

    static typeContractsPenaltyValueAdd(penaltyValueContract){
        cy.xpath(detailContractsElements.labelAddPenaltyValueContract).should('be.visible')
        cy.xpath(detailContractsElements.inputAddPenaltyValueContract).type(penaltyValueContract)
    }

    static clickContractsStatusAdd(statusContract){
        cy.xpath(detailContractsElements.labelAddStatusContract).should('be.visible')
        cy.xpath(detailContractsElements.selectAddStatusContract).select(statusContract)
    }

    static typeContractsWorkloadAdd(workloadContract){
        cy.xpath(detailContractsElements.labelAddWorkloadContract).should('be.visible')
        cy.xpath(detailContractsElements.inputAddWorkloadContract).type(workloadContract)
    }

    static typeContractsFirstDateAdd(firstDateContract){
        cy.xpath(detailContractsElements.labelAddFirstDateContract).should('be.visible')
        cy.xpath(detailContractsElements.inputAddFirstDateContract).type(firstDateContract)
    }

    static typeContractsStartDateAdd(startDateContract){
        cy.xpath(detailContractsElements.labelAddStartDateContract).should('be.visible')
        cy.xpath(detailContractsElements.inputAddStartDateContract).type(startDateContract)
    }

    static typeContractsEndDateAdd(endDateContract){
        cy.xpath(detailContractsElements.labelAddEndDateContract).should('be.visible')
        cy.xpath(detailContractsElements.inputAddEndDateContract).type(endDateContract)
    }

    static typeEditContractsEndDateAdd(endDateContract){
        cy.xpath(detailContractsElements.labelAddEndDateContract).scrollIntoView().should('be.visible')
        cy.xpath(detailContractsElements.inputAddEndDateContract).clear()
        cy.xpath(detailContractsElements.inputAddEndDateContract).type(endDateContract)
    }

    static typeContractsObservationsAdd(observationsContract){
        cy.xpath(detailContractsElements.labelAddObservationsContract).should('be.visible')
        cy.xpath(detailContractsElements.inputAddObservationsContract).type(observationsContract)
    }

    static validbuttonIncludeContract(){
        cy.xpath(detailContractsElements.buttonIncludeContract).should('be.visible')
    }

    static validSearchTitle(){
        cy.xpath(detailContractsElements.divSearchTitle).scrollIntoView().should('be.visible')
    }

    static clickTeamSearch(teamSearch){
        cy.xpath(detailContractsElements.labelTeamSearch).should('be.visible')
        cy.xpath(detailContractsElements.selectTeamSearch).select(teamSearch)
    }

    static typeStudentSearch(studentSearch){
        cy.xpath(detailContractsElements.labelStudentSearch).should('be.visible')
        cy.xpath(detailContractsElements.inputStudentSearch).type(studentSearch)
    }

    static clickServiceSearch(serviceSearch){
        cy.xpath(detailContractsElements.labelServiceSearch).should('be.visible')
        cy.xpath(detailContractsElements.selectServiceSearch).select(serviceSearch)
    }

    static clickStatusSearch(statusSearch){
        cy.xpath(detailContractsElements.labelStatusSearch).should('be.visible')
        cy.xpath(detailContractsElements.selectStatusSearch).select(statusSearch)
    }

    static clickInvoicingSearch(invoicingSearch){
        cy.xpath(detailContractsElements.labelInvoicingSearch).should('be.visible')
        cy.xpath(detailContractsElements.selectInvoicingSearch).select(invoicingSearch)
    }

    static clickSignedSearch(signedSearch){
        cy.xpath(detailContractsElements.labelSignedSearch).should('be.visible')
        cy.xpath(detailContractsElements.selectSignedSearch).select(signedSearch)
    }

    static clickButtonSearch(){
        cy.xpath(detailContractsElements.buttonSearch).should('be.visible')
        cy.xpath(detailContractsElements.buttonSearch).click()
    }
    
    static invalidContractSearch(){
        cy.xpath(detailContractsElements.divResultTitle).should('be.visible')
        cy.xpath(detailContractsElements.divCardSearch).should('not.exist')
    }

    static validContractSearch(numberContract){
        cy.xpath(detailContractsElements.divResultTitle).should('be.visible')
        cy.xpath(detailContractsElements.divCardSearch).should('be.visible')
        cy.xpath(detailContractsElements.divContractNumber).scrollIntoView().should('have.text', numberContract)
    }

    static clickButtonEditContract(){
        cy.xpath(detailContractsElements.buttonEditContract).should('be.visible')
        cy.xpath(detailContractsElements.buttonEditContract).click()
    }

    static clickButtonPDFContract(){
        cy.xpath(detailContractsElements.buttonPDFContract).should('be.visible')
        cy.xpath(detailContractsElements.buttonPDFContract).click()
    }

    static validChangeContractTitle(){
        cy.xpath(detailContractsElements.divChangeContractTitle).should('be.visible')
    }
    
    static clickButtonChangeContract(){
        cy.xpath(detailContractsElements.buttonChangeContract).should('be.visible')
        cy.xpath(detailContractsElements.buttonChangeContract).click()
    }

    static validEditSuccessAlert(){
        cy.xpath(detailContractsElements.divSuccessAlert).should('be.visible')
    }

    static clickButtonSendWhatsappContract(){
        cy.xpath(detailContractsElements.buttonSendWhatsappContract).should('be.visible')
        cy.xpath(detailContractsElements.buttonSendWhatsappContract).click()
    }
    
    static validWhatsappCodeTitle(){
        cy.xpath(detailContractsElements.divWhatsappCodeTitle).should('be.visible')
    }

    static clickButtonWalletContract(){
        cy.xpath(detailContractsElements.buttonWalletContract).should('be.visible')
        cy.xpath(detailContractsElements.buttonWalletContract).click()
    }

    static clickButtonConnectWhatsappContract(){
        cy.xpath(detailContractsElements.buttonConnectWhatsapp).should('be.visible')
        cy.xpath(detailContractsElements.buttonConnectWhatsapp).click()
        cy.wait(3000)
    }
    
    static validQRCodeWhatsapp(){
        cy.xpath(detailContractsElements.divQRCodeWhatsapp).should('be.visible')
    }

    static validWalletContractTitle(){
        cy.xpath(detailContractsElements.divWalletContractTitle).should('be.visible')
    }

    static clickButtonWalletPDF(){
        cy.xpath(detailContractsElements.buttonWalletPDF).scrollIntoView().should('be.visible')
        cy.xpath(detailContractsElements.buttonWalletPDF).click()
    }

    static clickSeeStudentContract(){
        cy.xpath(detailContractsElements.butonSeeStudentContract).scrollIntoView().should('be.visible')
        cy.xpath(detailContractsElements.butonSeeStudentContract).click()
    }
    
}

export default DetailsContracts