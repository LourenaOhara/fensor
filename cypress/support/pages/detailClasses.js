import detailClassesElements from "../elements/elementsClasses";

class DetailClasses {

    static clickClassesLink(){
        cy.xpath(detailClassesElements.linkClasses).click()
    }

    static clickButtonAddClass(){
        cy.xpath(detailClassesElements.buttonAddClass).click()
    }
}

export default DetailClasses