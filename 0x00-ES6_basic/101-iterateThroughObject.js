export default function iterateThroughObject(reportWithIterator) {
  let i = reportWithIterator.next();
  let lst = '';

  while (!i.done) {
    lst += `${i.value} | `;
    i = reportWithIterator.next();
  }
  return lst.slice(0, lst.length - 3);
}
