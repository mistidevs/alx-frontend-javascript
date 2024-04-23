export default function createIteratorObject(report) {
  const myVals = Object.values(Object.values(report.allEmployees));

  const myList = []
  for (const idx of myVals) {
    for (const index of idx) {
      myList.push(index)
    }
  }

  myList[Symbol.iterator] = function() {
    const keys = Object.keys(this);
    let index = 0;
    
    return {
      next: () => {
        if (index < keys.length) {
          const key = keys[index];
          index++;
          return { value: [key, this[key]], done: false };
        } else {
          return { done: true };
        }
      }
    };
  };

  return myList;
}
