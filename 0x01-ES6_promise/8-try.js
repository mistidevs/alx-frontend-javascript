export default function divideFunction(numerator, denominator) {
  return new Promise(() => {
    if (denominator === 0) {
      throw new Error("cannot divide by 0")
    } else {
      return numerator/denominator;
    }
  });
}
