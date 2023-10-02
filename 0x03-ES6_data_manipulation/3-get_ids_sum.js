
export default function getStudentIdsSum(studentList){
    const initialValue = 0;

    const sum = studentList.reduce((acc, currVal)=> acc + currVal.id ,initialValue);

    return sum;
}