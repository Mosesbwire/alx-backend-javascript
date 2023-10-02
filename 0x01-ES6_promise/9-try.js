export default function guardrail(mathFunction){
    const queue = [];
    const msg = "Guardrail was processed"

    try {
        const res = mathFunction();
        queue.push(res);
        queue.push(msg);
    } catch (error) {
        const str = `${error.name}: ${error.message}`;
        queue.push(str);
        queue.push(msg);
    }

    return queue;
}