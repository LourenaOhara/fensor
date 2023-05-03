/// <reference types="cypress" />
import DetailLogin from "../../support/pages/detailLogin";
import DetailsContracts from "../../support/pages/detailContract";

describe('Contracts', () => {
    it("Search Contract", () => {
        DetailLogin.Login()
        DetailsContracts.clickContractsLink()
        DetailsContracts.validSearchTitle()
        DetailsContracts.clickTeamSearch('Chinelo de Trave Futebol Clube')
        DetailsContracts.typeStudentSearch('João Fernando Seixas')
        DetailsContracts.clickServiceSearch('AULAS DE FUTEBOL')
        DetailsContracts.clickStatusSearch('Ativo')
        DetailsContracts.clickInvoicingSearch('Não')
        DetailsContracts.clickSignedSearch('Todos')
        DetailsContracts.clickButtonSearch()
        DetailsContracts.validContractSearch('Contrato 000001')
    })

    it("Search Contract - Not Found", () => {
        DetailLogin.Login()
        DetailsContracts.clickContractsLink()
        DetailsContracts.validSearchTitle()
        DetailsContracts.clickTeamSearch('Tritão Grupo de Nado')
        DetailsContracts.typeStudentSearch('Breno Oliveira')
        DetailsContracts.clickServiceSearch('PERSONAL SOCCER')
        DetailsContracts.clickStatusSearch('Ativo')
        DetailsContracts.clickInvoicingSearch('Não')
        DetailsContracts.clickSignedSearch('Sim')
        DetailsContracts.clickButtonSearch()
        DetailsContracts.invalidContractSearch()
    })
})