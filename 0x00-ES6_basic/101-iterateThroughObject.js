export default function iterateThroughObject(reportWithIterator) {
    let text = "";
    const separator = " | ";

    for (const [index, name] of reportWithIterator.entries()){
        text += name;
        if (index < reportWithIterator.length - 1){
            text += separator
        }
    }

    return text;
}