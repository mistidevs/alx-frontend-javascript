export default function createIteratorObject(report) {
  report[Symbol.iterator] = function() {
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
}