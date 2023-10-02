
export default function getStudentsByLocation(studentsList, location){
   if (!Array.isArray(studentsList)) throw new Error('studentList must be of type Array');

   if (typeof location !== "string") throw new Error('location must be of type String');

   const students = studentsList.filter(student => student.location === location);
   
   return students;
}