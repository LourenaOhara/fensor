/// <reference types="cypress" />
import DetailLogin from "../../support/pages/detailLogin";
import DetailsContracts from "../../support/pages/detailContract";

describe('Contracts', () => {
    it.skip("Add Contract", () => {
        DetailLogin.Login()
        DetailsContracts.clickContractsLink()
        DetailsContracts.clickButtonAddContract()
        DetailsContracts.validContractsTitle()
        DetailsContracts.clickContractsTeamAdd('Tritão Grupo de Nado')
        DetailsContracts.typeContractsStudentAdd('Pedro Alcantara Andrade')
        DetailsContracts.clickContractsServiceAdd('PERSONAL SOCCER')
        DetailsContracts.clickContractsBillingAdd('Mensal')
        DetailsContracts.clickContractsPaymentAdd('Boleto')
        DetailsContracts.clickContractsInsuranceAdd()
        DetailsContracts.clickContractsDiscountTypeAdd('Fixo')
        DetailsContracts.typeContractsDiscountValueAdd('500')
        DetailsContracts.typeContractsMonthValueAdd('10000')
        DetailsContracts.validContractsTotalValue()
        DetailsContracts.clickContractsFeesTypeAdd('Percentual')
        DetailsContracts.typeContractsFeesValueAdd('300')
        DetailsContracts.clickContractsPenaltyTypeAdd('Fixo')
        DetailsContracts.typeContractsPenaltyValueAdd('7000')
        DetailsContracts.clickContractsStatusAdd('Ativo')
        DetailsContracts.typeContractsWorkloadAdd('08:00')
        DetailsContracts.typeContractsFirstDateAdd('2023-05-30')
        DetailsContracts.typeContractsStartDateAdd('2023-05-10')
        DetailsContracts.typeContractsEndDateAdd('2025-05-30')
        DetailsContracts.typeContractsObservationsAdd('Aluno já iniciou as aulas')
        DetailsContracts.validbuttonIncludeContract()
    })
})