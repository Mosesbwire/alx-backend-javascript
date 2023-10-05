
interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee : boolean ,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any
    
}

const teacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    location: "Nairobi",
    contract: true
}

interface Director extends Teacher {
    numberOfReports: number
}

const director: Director = {
    firstName: "Jane",
    lastName: "DOe",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "Mombasa",
    numberOfReports: 29
}

function printTeacher(firstName: string, lastName: string) :string {
    return `${firstName[0]}. ${lastName}`
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string
}

const printer: printTeacherFunction = printTeacher;


interface Student {
    firstName: string,
    lastName: string,
    workOnHomeWork(): string,
    displayName(): string,
    
}


class StudentClass implements Student{

    firstName: string;
    lastName: string;

    constructor (firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomeWork(): string {
        return "Currently working";
    }

    displayName(): string {
        return `${this.firstName}`
    }

}


