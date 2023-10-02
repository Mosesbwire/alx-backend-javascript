export default function updateStudentGradeByCity(studentList, location, newGrades){
    if (!Array.isArray(studentList)) throw new TypeError("student list must be of type Array");
    if (typeof location !== "string") throw new TypeError("location must be of type String");
    if (!Array.isArray(newGrades)) throw new TypeError("newGrades must be of type Array");

    const data = studentList.map(student => {
            const updatedStudent = {...student, grade: "N/A"};

            newGrades.forEach(grade => {
                if (grade.studentId === student.id){
                    updatedStudent.grade = grade.grade;
                }
            });

            return updatedStudent;
    }).filter(student => student.location === location);

    return data;
}