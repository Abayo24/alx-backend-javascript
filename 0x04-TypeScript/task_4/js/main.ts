import { Cpp } from './subjects/Cpp'
import { Java } from './subjects/Java'
import { React } from './subjects/React'
import { Teacher } from './subjects/Teacher'

export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

const cTeacher: Teacher = {
  experienceTeachingC: 10,
};

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
cpp.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
cpp.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());