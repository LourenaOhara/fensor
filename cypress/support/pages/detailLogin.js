import detailLoginElements from "../elements/elementsLogin";

class DetailLogin {

    static visitLoginURL(){
        cy.visit(detailLoginElements.qaLoginUrl)
    }

    static typeEmailLogin(){
        cy.xpath(detailLoginElements.labelEmail).type('gestor@escolateste.com.br')
    }

    static typePasswordLogin(){
        cy.xpath(detailLoginElements.labelPassword).type('123456')
    }
    
    static clickButtonLogin(){
        cy.xpath(detailLoginElements.buttonEnter).click()
    }

    static clickButtonList(){
        cy.xpath(detailLoginElements.buttonList).click()
    }
}

export default DetailLogin