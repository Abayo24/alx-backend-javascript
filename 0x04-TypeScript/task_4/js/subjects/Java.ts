/// <reference path="./Subject.ts" />

namespace Subjects {
  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingC) {
        return 'No available teacher';
      } else {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }
}