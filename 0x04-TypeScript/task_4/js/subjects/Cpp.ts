// import Subject from './Subject.ts';

namespace Subjects {
  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      const { teacher } = this;

      if (!teacher.experienceTeachingC) {
        return 'No available teacher';
      }

      return `Available Teacher: ${teacher.firstName}`;
    }
  }
}
