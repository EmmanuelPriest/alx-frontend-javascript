"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cTeacher = exports.react = exports.java = exports.cpp = void 0;
var Cpp_1 = require("./subjects/Cpp");
var Java_1 = require("./subjects/Java");
var React_1 = require("./subjects/React");
// Create constants for each subject
exports.cpp = new Cpp_1.Cpp();
exports.java = new Java_1.Java();
exports.react = new React_1.React();
// Create a Teacher object with experienceTeachingC = 10
exports.cTeacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
};
// Set cTeacher as the teacher for the Cpp subject
exports.cpp.setTeacher(exports.cTeacher);
// Log the requirements and available teacher for the Cpp subject
console.log('C++');
console.log(exports.cpp.getRequirements());
console.log(exports.cpp.getAvailableTeacher());
// Set cTeacher as the teacher for the Java subject
exports.java.setTeacher(exports.cTeacher);
// Log the requirements and available teacher for the Java subject
console.log('Java');
console.log(exports.java.getRequirements());
console.log(exports.java.getAvailableTeacher());
// Set cTeacher as the teacher for the React subject
exports.react.setTeacher(exports.cTeacher);
// Log the requirements and available teacher for the React subject
console.log('React');
console.log(exports.react.getRequirements());
console.log(exports.react.getAvailableTeacher());
