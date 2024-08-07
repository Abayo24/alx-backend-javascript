/* eslint-disable linebreak-style */
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(`Errorr: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
