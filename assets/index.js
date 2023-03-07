const backBtn = document.getElementById("backBtn");
const loginAdminBtn = document.getElementById("loginAdmin");
const loginTeacherBtn = document.getElementById("loginTeacher");
const loginStudentBtn = document.getElementById("loginStudent");
const registerStudentBtn = document.getElementById("registerStudent");
const adminHomeBtn = document.getElementById("adminHome")
const editProfileAdminBtn = document.getElementById("editProfileAdmin")
const changePasswordAdminBtn = document.getElementById("changePassword")
const logoutAdminBtn = document.getElementById("logOutAdmin")
const registerTeacherBtn = document.getElementById("registerTeacher") 
const studentListBtn = document.getElementById("studentList") 
const teacherListBtn = document.getElementById("teacherList") 
const createClassBtn = document.getElementById("createClass") 
const classListBtn = document.getElementById("classList") 
const studentAlgoBtn = document.getElementById("studentAlgo") 
const studentMathBtn = document.getElementById("studentMath") 
const studentBioBtn = document.getElementById("studentBio") 
const studentChimestryBtn = document.getElementById("studentChimestry") 
const studentHisBtn = document.getElementById("studentHistory") 
const adminHome1Btn = document.getElementById("adminHome1") 

if(adminHome1Btn){
    adminHome1Btn.addEventListener("click", () => {
        toAdminHomeHome();
    })
}

function toAdminHomeHome(){
    window.location.href="admin.html"
}
if(studentHisBtn){
    studentHisBtn.addEventListener("click", () => {
        toAdminStudentHistory();
    })
}

function toAdminStudentHistory(){
    window.location.href="studentHistory.html"
}
if(studentChimestryBtn){
    studentChimestryBtn.addEventListener("click", () => {
        toAdminStudentChimestry();
    })
}

function toAdminStudentChimestry(){
    window.location.href="studentChimestry.html"
}

if(studentBioBtn){
    studentBioBtn.addEventListener("click", () => {
        toAdminStudentBio();
    })
}

function toAdminStudentBio(){
    window.location.href="studentbiology.html"
}

if(studentMathBtn){
    studentMathBtn.addEventListener("click", () => {
        toAdminStudentMath();
    })
}

function toAdminStudentMath(){
    window.location.href="studentmath.html"
}

if(studentAlgoBtn){
    studentAlgoBtn.addEventListener("click", () => {
        toAdminStudentAlgo();
    })
}

function toAdminStudentAlgo(){
    window.location.href="studentalgo.html"
}

if(classListBtn){
    classListBtn.addEventListener("click", () => {
        toAdminClassList();
    })
}

function toAdminClassList(){
    window.location.href="classlist.html"
}

if(createClassBtn){
    createClassBtn.addEventListener("click", () => {
        toCreateClass();
    })
}

function toCreateClass(){
    window.location.href="createclass.html"
}

if(teacherListBtn){
    teacherListBtn.addEventListener("click", () => {
        toTeacherList();
    })
}

function toTeacherList(){
    window.location.href="teacherlist.html"
}

if(studentListBtn){
    studentListBtn.addEventListener("click", () => {
        toStudentList();
    })
}

function toStudentList(){
    window.location.href="studentlist.html"
}

if(registerTeacherBtn){
    registerTeacherBtn.addEventListener("click", () => {
        toRegisterTeacher();
    })
}

function toRegisterTeacher(){
    window.location.href="registerteacher.html"
}

if(logoutAdminBtn){
    logoutAdminBtn.addEventListener("click", () => {
        toAdminLogOut();
    })
}

function toAdminLogOut(){
    window.location.href="login.html"
}

if(changePasswordAdminBtn){
    changePasswordAdminBtn.addEventListener("click", () => {
        toAdminChangePassword();
    })
}

function toAdminChangePassword(){
    window.location.href="changepassword.html"
}

if(adminHomeBtn){
    adminHomeBtn.addEventListener("click", () => {
        toAdminHomeTitle();
    })
}

function toAdminHomeTitle(){
    window.location.href="admin.html"
}

if(backBtn){
    backBtn.addEventListener("click", () =>{
        backOnePage();
    })
}

function backOnePage(){
    window.history.back();
}

if(loginAdminBtn){
    loginAdminBtn.addEventListener("click", () => {
        toAdminHome();
    })
}

function toAdminHome(){
    window.location.href="admin.html"
}

if(loginTeacherBtn){
    loginTeacherBtn.addEventListener("click", () => {
        toTeacherHome();
    })
}

function toTeacherHome(){
    window.location.href="teacher.html"
}

if(loginStudentBtn){
    loginStudentBtn.addEventListener("click", () => {
        toStudentHome();
    })
}

function toStudentHome(){
    window.location.href="student.html"
}

if(registerStudentBtn){
    registerStudentBtn.addEventListener("click", () => {
        toregisterStudent();
    })
}

function toregisterStudent(){
    window.location.href="studentregister.html"
}