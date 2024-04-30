export default function hasValuesFromArray(mySet, myArray) {
  for (const idx of myArray) {
    if (mySet.has(idx) === false) {
      return false;
    }
  }

  return true;
}
