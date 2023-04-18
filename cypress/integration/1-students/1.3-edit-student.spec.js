/// <reference types="cypress" />
import DetailLogin from "../../support/pages/detailLogin";
import DetailStudents from "../../support/pages/detailStudents";


describe('Students', () => {
    it("Search Student", () => {
        DetailLogin.Login()
        DetailStudents.clickStudentsLink()
        DetailStudents.validStudentCard()
        DetailStudents.validStudentCardName('João Fernando Seixas')
        DetailStudents.clickEditStudent()
        DetailStudents.typeEditCellNumber()
        DetailStudents.clickBtnEditStudent()
        DetailStudents.validModalSuccess()
    })
})