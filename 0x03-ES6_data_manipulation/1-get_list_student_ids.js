export default function getListStudentIds(lst) {
  if (!Array.isArray(lst)) { return []; }

  const ids = lst.map((student) => student.id);

  return ids;
}
