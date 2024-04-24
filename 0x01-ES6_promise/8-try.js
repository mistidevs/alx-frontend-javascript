export default function divideFunction(numerator, denominator) {
  return new Promise((resolve) => {
    if (denominator === 0) {
      throw Error("cannot divide by 0")
    } else {
      resolve(numerator/denominator)
    }
  });
}
