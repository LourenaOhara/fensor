const detailStudentsElements = {
    linkStudents: "//*[@id='root']//nav/a[contains(text(), 'Alunos')]",
    buttonAddStudent: "//*[@id='root']//button[contains(text(), 'Adicionar aluno')]",
    divAddStudent: "//*[@id='add_aluno']/div/h3[contains(text(), 'Incluir aluno')]",
    inputNameStudent: ".content_panel > #add_aluno > .modal_content > .form_modal > :nth-child(1) > :nth-child(1) > .form_control",
    inputRGStudent: "//*[@id='add_aluno']/div/form/div[1]/div[2]/div/input",
    inputCPFStudent: "//*[@id='add_aluno']/div/form/div[1]/div[3]/div/input",
    inputBirthStudent: "//*[@id='add_aluno']/div/form/div[1]/div[4]/div/input",
    inputCelStudent: "//*[@id='add_aluno']/div/form/div[1]/div[5]/div/input",
    selectTypeStudent: "//*[@id='add_aluno']//form/div[1]/div[6]//select",
    selectStatusStudent: "//*[@id='add_aluno']//form/div[1]/div[7]//select",
    selectSport: "//*[@id='add_aluno']//form/div[3]/div[1]//select",
    inputSchoolYear: ".content_panel > #add_aluno > .modal_content > .form_modal > :nth-child(3) > :nth-child(2) > .form_group > .form_control",
    selectPosition: "//*[@id='add_aluno']/div/form/div[4]/div/select",
    selectCT: "//*[@id='add_aluno']//form/div[5]//select",
    selectSkill: "//*[@id='add_aluno']//form/div[6]/div[1]//select",
    selectSublevel: "//*[@id='add_aluno']//form/div[6]/div[2]//select",
    inputEmail: "//*[@id='add_aluno']//form/div[7]/div[1]/input",
    selectMeetSchool: "//*[@id='add_aluno']//form/div[7]/div[2]/select",
    selectLaterality: "//*[@id='add_aluno']//form/div[7]/div[3]//select",
    labelTrainingSchedule: "//*[@id='add_aluno']//form/div[7]/div[4]//label[contains(.,'Horário de treino')]",
    selectTrainingSchedule: "//*[contains(@value,'MANHA')]"
}

export default detailStudentsElements