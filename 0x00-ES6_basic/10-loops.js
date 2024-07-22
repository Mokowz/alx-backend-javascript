export default function appendToEachArrayValue(array, appendString) {
  const lst = [];
  for (const value of array) {
    lst.push(appendString + value);
  }

  return lst;
}
