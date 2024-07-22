export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees).reduce((a, b) => {
    a.push(...b);
    return a;
  }, []);

  let indx = 0;
  const maxIndx = employees.length;

  return {
    next() {
      if (indx < maxIndx) {
        const result = { value: employees[indx], done: false };
        indx += 1;
        return result;
      }
      return { value: null, done: true };
    },
    [Symbol.iterator]: () => this.next(),
  };
}
