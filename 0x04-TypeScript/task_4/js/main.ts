/// <reference path="subjects/Cpp.ts"/>
/// <reference path="subjects/Java.ts"/>
/// <reference path="subjects/React.ts"/>


export const cpp = Subjects.Cpp;
export const java = Subjects.Java;
export const react = Subjects.React;

export const cTeacher:Subjects.Teacher = {
    firstName: "Moses",
    lastName: "Bwire",
    experienceTeachingC: 10,
}

console.log("C++");
const cppSubject = new cpp();

cppSubject.setTeacher = cTeacher;

console.log(cppSubject.getRequirements());
console.log(cppSubject.getAvailableTeacher());

console.log("Java");
const javaSubject = new java();

javaSubject.setTeacher = cTeacher;

console.log(javaSubject.getRequirements());
console.log(javaSubject.getAvailableTeacher());

console.log("React");

const reactSubject = new react();

reactSubject.setTeacher = cTeacher;

console.log(reactSubject.getRequirements());
console.log(reactSubject.getAvailableTeacher());




