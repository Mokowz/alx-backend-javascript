export default function getListStudents() {
  const lst = [];
  
  lst.push({
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco'
  });
  lst.push({
    id: 2,
    firstName: 'James',
    location: 'Columbia'
  });
  lst.push({
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco'
  });

  return lst;
}
