/* eslint-disable linebreak-style */
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(`Errorr: ${error.message}`);
  }

  queue.push('Guardrail was processed');

  return queue;
}
