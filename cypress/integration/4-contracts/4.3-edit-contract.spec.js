/// <reference types="cypress" />
import DetailLogin from "../../support/pages/detailLogin";
import DetailsContracts from "../../support/pages/detailContract";
import DetailStudents from "../../support/pages/detailStudents";

describe('Contracts', () => {
    it("Edit Contract", () => {
        DetailLogin.Login()
        DetailsContracts.clickContractsLink()
        DetailsContracts.validContractSearch('Contrato 000001')
        DetailsContracts.clickButtonEditContract()
        DetailsContracts.validChangeContractTitle()
        DetailsContracts.typeEditContractsEndDateAdd('2027-08-12') 
        DetailsContracts.clickButtonChangeContract()
        DetailsContracts.validEditSuccessAlert()
    })

    it("Contract PDF", () => {
        DetailLogin.Login()
        DetailsContracts.clickContractsLink()
        DetailsContracts.validContractSearch('Contrato 000001')
        DetailsContracts.clickButtonPDFContract()
    })

    it("Send Whatsapp Contract", () => {
        DetailLogin.Login()
        DetailsContracts.clickContractsLink()
        DetailsContracts.validContractSearch('Contrato 000001')
        DetailsContracts.clickButtonSendWhatsappContract()
        DetailsContracts.validWhatsappCodeTitle()
        DetailsContracts.clickButtonConnectWhatsappContract()
        DetailsContracts.validQRCodeWhatsapp()
    })

    it("Wallet Contract", () => {
        DetailLogin.Login()
        DetailsContracts.clickContractsLink()
        DetailsContracts.validContractSearch('Contrato 000001')
        DetailsContracts.clickButtonWalletContract()
        DetailsContracts.validWalletContractTitle()
        DetailsContracts.clickButtonWalletPDF()
    })

    it("See Student - Contract", () => {
        DetailLogin.Login()
        DetailsContracts.clickContractsLink()
        DetailsContracts.validContractSearch('Contrato 000001')
        DetailsContracts.clickSeeStudentContract()
        DetailStudents.validStudentNameProfile('João Fernando Seixas')
        DetailStudents.validStudentsInformations()
    })
})
