import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
import { Teacher } from './subjects/Teacher';

// Create constants for each subject
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Create a Teacher object with experienceTeachingC = 10
export const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// Set cTeacher as the teacher for the Cpp subject
cpp.setTeacher(cTeacher);

// Log the requirements and available teacher for the Cpp subject
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Set cTeacher as the teacher for the Java subject
java.setTeacher(cTeacher);

// Log the requirements and available teacher for the Java subject
console.log('Java');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// Set cTeacher as the teacher for the React subject
react.setTeacher(cTeacher);

// Log the requirements and available teacher for the React subject
console.log('React');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
