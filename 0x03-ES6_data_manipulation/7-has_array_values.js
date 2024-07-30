export default function hasValuesFromArray(st, ar) {
  for (const num of ar) {
    if (!st.has(num)) {
      return false;
    }
  }

  return true;
}
