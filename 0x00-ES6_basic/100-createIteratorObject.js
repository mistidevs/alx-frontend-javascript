export default function createIteratorObject(report) {
  const myVals = Object.values(Object.values(report.allEmployees));

  const myList = []
  for (const idx of myVals) {
    for (const index of idx) {
      myList.push(index)
    }
  }

  return myList;
}
