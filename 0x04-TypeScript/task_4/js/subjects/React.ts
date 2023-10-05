
/// <reference path="Subject.ts"/>

namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number
    }

    export class React extends Subject {

        getRequirements(): string {
            return "Here is the list of requirements for React";
        }

        getAvailableTeacher(): string {
            const experience = this.teacher.experienceTeachingReact;

            if (experience === undefined || experience === 0) {
                return "No available teacher";
            }

            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}