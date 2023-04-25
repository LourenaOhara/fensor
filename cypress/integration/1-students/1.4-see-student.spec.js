/// <reference types="cypress" />
import DetailLogin from "../../support/pages/detailLogin";
import DetailStudents from "../../support/pages/detailStudents";

describe('Students', () => {
    it("See Student", () => {
        DetailLogin.Login()
        DetailStudents.clickStudentsLink()
        DetailStudents.clickSeeStudent()
        DetailStudents.validStudentNameProfile('João Fernando Seixas')
        DetailStudents.validStudentsInformations()
    })
})
