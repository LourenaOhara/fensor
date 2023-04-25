/// <reference types="cypress" />
import DetailLogin from "../../support/pages/detailLogin";
import DetailStudents from "../../support/pages/detailStudents";

const uuid = () => Cypress._.random(0, 1e6)
const numb = uuid()

describe('Students', () => {
    it("Edit Student", () => {
        DetailLogin.Login()
        DetailStudents.clickStudentsLink()
        DetailStudents.validStudentCard()
        DetailStudents.validStudentCardName('João Fernando Seixas')
        DetailStudents.clickEditStudent()
        DetailStudents.typeEditCellNumber('3192999111'+numb)
        DetailStudents.clickBtnEditStudent()
        DetailStudents.validModalSuccess()
    })
    //thos scenario should return a error. But the test passed
    it("Edit Student - Invalid Data", () => {
        DetailLogin.Login()
        DetailStudents.clickStudentsLink()
        DetailStudents.validStudentCard()
        DetailStudents.validStudentCardName('João Fernando Seixas')
        DetailStudents.clickEditStudent()
        DetailStudents.typeEditCellNumber('319297')
        DetailStudents.clickBtnEditStudent()
        DetailStudents.validModalSuccess()
    })

})