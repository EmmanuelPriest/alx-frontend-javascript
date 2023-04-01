// import Subject from './Subject.ts';

namespace Subjects {
  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      const { teacher } = this;

      if (!teacher.experienceTeachingReact) {
        return 'No available teacher';
      }

      return `Available Teacher: ${teacher.firstName}`;
    }
  }
}
