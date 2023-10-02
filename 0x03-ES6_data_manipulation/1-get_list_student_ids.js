export default function getListStudentIds(studentList){
    if (!Array.isArray(studentList)) return [];

    const ids = studentList.map(student => student.id);

    return ids;
}