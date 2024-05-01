/// <reference path='Teacher.ts' />
/// <reference path='Subject.ts' />
/// <reference path='Cpp.ts' />
/// <reference path='React.ts' />
/// <reference path='Java.ts' />

export const cTeacher: Subjects.Teacher = {
  firstName: "Bobby",
  lastName: "Wine",
  experienceTeachingC: 10,
};
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

console.log("C++");
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("Java");
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("React");
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());