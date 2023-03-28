import detailLoginElements from "../elements/elementsLogin";

class DetailLogin {

    static Login(){
        cy.visit(detailLoginElements.qaLoginUrl)
        cy.xpath(detailLoginElements.labelEmail).type('gestor@escolateste.com.br')
        cy.xpath(detailLoginElements.labelPassword).type('123456')
        cy.xpath(detailLoginElements.buttonEnter).click()
        cy.xpath(detailLoginElements.buttonList).click()
    }
}

export default DetailLogin