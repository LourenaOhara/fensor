import detailContractsElements from "../elements/elementsContract";

class DetailsContracts {

    static clickContractsLink(){
        cy.xpath(detailContractsElements.linkContracts).click()
    }














    

    static validSearchTitle(){
        cy.xpath(detailContractsElements.divSearchTitle).should('be.visible')
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
        cy.xpath(detailContractsElements.divContractNumber).should('have.text', numberContract)
    }

}

export default DetailsContracts