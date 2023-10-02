
export default function hasValuesFromArray(set, array){
    const subSet = new Set(array);

    for (const el of subSet){
        if (!set.has(el)) return false;
    }
    return true;
}