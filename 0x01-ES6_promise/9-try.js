export default function guardrail(mathFunction) {
  const queue = [];
  const valueFunction = mathFunction();
  const valuePromise = Promise.all([valueFunction])
  queue.push(valuePromise);
  queue.push("Guardrail was processed");
  return queue;
}
