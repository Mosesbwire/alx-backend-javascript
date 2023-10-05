interface EmployeeInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
}

interface DirectorInterface extends EmployeeInterface {
    workDirectorTasks(): string
}

interface TeacherInterface extends EmployeeInterface {
    workTeacherTasks(): string
}

class Director implements DirectorInterface {

    workFromHome(): string {
        return "Working from home";
    }
    
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }

    toString() {
        return `${this.constructor.name}`;
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
    toString() {
        return `${this.constructor.name}`;
    }
}

function createEmployee(salary: string | number) {
    const teacherMaxSalary = 500
    if (typeof salary === "number" && salary < teacherMaxSalary) {
        return new Teacher();
    }
    return new Director();
}

function isDirector(employee: Teacher | Director) {
    return employee instanceof Director
}

function executeWork(employee: any) {
    if(isDirector(employee)) {
        console.log(employee.workDirectorTasks());

    } else {
        console.log(employee.workTeacherTasks())
    }

    
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects) {
    console.log(`Teaching ${todayClass}`);
}

teachClass("History");
teachClass("Math");

