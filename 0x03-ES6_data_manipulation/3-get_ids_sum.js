import getListStudents from './0-get_list_students';

export default function getStudentIdsSum(lst = getListStudents()) {
  const sum = lst.reduce((acc, student) => acc + student.id, 0);

  return sum;
}
