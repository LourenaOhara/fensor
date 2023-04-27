/// <reference types="cypress" />
import DetailLogin from "../../support/pages/detailLogin";
import DetailStudents from "../../support/pages/detailStudents";

describe('Students', () => {
    it("Upload Doc Student", () => {
        DetailLogin.Login()
        DetailStudents.clickStudentsLink()
        DetailStudents.clickDocStudent()
        DetailStudents.validDocTitle()
        DetailStudents.clickDocType('Foto 3 x 4')
        DetailStudents.clickCloseDoc()
    })

    it("Anamnesis form", () => {
        DetailLogin.Login()
        DetailStudents.clickStudentsLink()
        DetailStudents.clickAnamnesisStudent()
        DetailStudents.validAnamnesisTitle()
        DetailStudents.validAnamnesisName()
        DetailStudents.typeAnamnesisWeight('56')
        DetailStudents.typeAnamnesisHeight('165')
        DetailStudents.typeAnamnesisAge()
        DetailStudents.typeAnamnesisIMC('18')
        DetailStudents.selectAnamnesisSmoke('Não')
        DetailStudents.typeAnamnesisSmokeTime()
        DetailStudents.clickTableCancerOption()
        DetailStudents.addSurgeriesPerformed('Adenoide', '9 anos')
        DetailStudents.addTreatment('Ronco', 'Dr. Pedro')
        DetailStudents.typeAnamnesisObservations('Saúde de ferro')
        DetailStudents.validButtonsForm()
    })
})