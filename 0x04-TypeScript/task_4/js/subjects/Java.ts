/// <reference path="Teacher.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      const exp = this.teacher.experienceTeachingJava; 

      if (exp > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}