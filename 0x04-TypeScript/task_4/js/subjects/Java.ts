// import Subject from './Subject.ts';

namespace Subjects {
  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      const { teacher } = this;

      if (!teacher.experienceTeachingJava) {
        return 'No available teacher';
      }

      return `Available Teacher: ${teacher.firstName}`;
    }
  }
}
