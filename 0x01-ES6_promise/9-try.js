export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const lst = mathFunction();
    queue.push(lst);
  } catch (err) {
    queue.push(err.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
