
/// <reference path="Subject.ts"/>

namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number
    }

    export class Java extends Subject {

        getRequirements(): string {
            return "Here is the list of requirements for Java";
        }

        getAvailableTeacher(): string {
            const experience = this.teacher.experienceTeachingJava;

            if (experience === undefined || experience === 0) {
                return "No available teacher";
            }

            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}