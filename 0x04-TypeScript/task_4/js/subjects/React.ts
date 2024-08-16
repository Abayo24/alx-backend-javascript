/// <reference path="./Subject.ts" />

namespace Subjects {
  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
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