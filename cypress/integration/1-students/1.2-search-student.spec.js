/// <reference types="cypress" />
import DetailLogin from "../../support/pages/detailLogin";
import DetailStudents from "../../support/pages/detailStudents";

describe('Students', () => {
    it("Search Student", () => {
        DetailLogin.Login()
        DetailStudents.clickStudentsLink()
        DetailStudents.validSearchTitle()
        DetailStudents.typeSearchNameStudent('Pedro')
        DetailStudents.clickButtonSearchStudent()
        DetailStudents.validStudentCard()
    })
    
    it("Search Student - Name not Found", () => {
        DetailLogin.Login()
        DetailStudents.clickStudentsLink()
        DetailStudents.validSearchTitle()
        DetailStudents.typeSearchNameStudent('Alice')
        DetailStudents.clickButtonSearchStudent()
        DetailStudents.invalidStudentCard()
    })
})