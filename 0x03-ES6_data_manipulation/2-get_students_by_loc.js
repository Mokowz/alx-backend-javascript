import getListStudents from './0-get_list_students';

export default function getStudentsByLocation(lst = getListStudents(), city) {
  const locs = lst.filter((stud) => stud.location === city);

  return locs;
}
