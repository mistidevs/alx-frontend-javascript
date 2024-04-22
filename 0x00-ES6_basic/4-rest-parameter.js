export default function returnHowManyArguments(...args) {
  numArgs = 0;
  for (let i of args) {
    numArgs += 1;
  }
  return numArgs;
}
