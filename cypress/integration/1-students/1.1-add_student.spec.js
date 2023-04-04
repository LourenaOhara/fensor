/// <reference types="cypress" />
import DetailLogin from "../../support/pages/detailLogin";
import DetailStudents from "../../support/pages/detailStudents";

describe('Students', () => {
    it("Register Student", () => {
        DetailLogin.Login()
        DetailStudents.clickStudentsLink()
        DetailStudents.clickButtonAddStudent()
        DetailStudents.validTextAddStudent()
        DetailStudents.typeNameStudent('Manuela Seixas Reis')
        DetailStudents.typeRGStudent('281843764')
        DetailStudents.typeCPFStudent('40222018003')
        DetailStudents.typeBirthStudent('2008-10-06')
        DetailStudents.typeCellStudent('11992245555')
        DetailStudents.clickTypeStudent('Regular')
        DetailStudents.clickStatusStudent('Pré-cadastrado')
        DetailStudents.clickSportStudent('Handebol')
        DetailStudents.typeSchoolYear('9')
        DetailStudents.typePosition('Meia')
        DetailStudents.typeCTStudent('CT Barreiro')
        DetailStudents.typeSkill('6')
        DetailStudents.typeSublevel('Intermediário')
        DetailStudents.typeEmailStudent('mseixas.reis@gmail.com')
        DetailStudents.typeMeetSchool('Instagram')
        DetailStudents.typeLateralityStudent('Destro')
        DetailStudents.clickTrainingSchedule()

    })  
})