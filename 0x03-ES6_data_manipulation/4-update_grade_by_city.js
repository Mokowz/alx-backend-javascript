/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
import getListStudents from './0-get_list_students';

export default function updateStudentGradeByCity(studs = getListStudents(), city, newGrades) {
  const lst = studs.filter((stud) => stud.location === city);

  lst.map((stud) => {
    const grades = newGrades.filter((grade) => grade.studentId === stud.id);
    const grade = grades.length ? grades[0].grade : 'N/A';
    stud.grade = grade;
  });

  return lst;
}
